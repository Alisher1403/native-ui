import UIKit
import React

@objc(ContextMenuView)
class ContextMenuView: RCTView, UIContextMenuInteractionDelegate {
  @objc var menuConfig: NSArray = [] {
    didSet {
      parsedMenuConfig = menuConfig.compactMap { $0 as? [String: Any] }
    }
  }

  @objc var disabled: Bool = false {
    didSet {
      contextMenuInteraction.view?.isUserInteractionEnabled = !disabled
    }
  }

  @objc var onActionPress: RCTBubblingEventBlock?

  private lazy var contextMenuInteraction = UIContextMenuInteraction(delegate: self)
  private var parsedMenuConfig: [[String: Any]] = []

  override init(frame: CGRect) {
    super.init(frame: frame)
    addInteraction(contextMenuInteraction)
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
    addInteraction(contextMenuInteraction)
  }

  func contextMenuInteraction(
    _ interaction: UIContextMenuInteraction,
    configurationForMenuAtLocation location: CGPoint
  ) -> UIContextMenuConfiguration? {
    guard !disabled else {
      return nil
    }
    let params = UIPreviewParameters()
    params.backgroundColor = .clear

    return UIContextMenuConfiguration(identifier: nil, previewProvider: nil) { [weak self] _ in
      guard let self else {
        return nil
      }

      let children = self.buildMenuElements(from: self.parsedMenuConfig)
      return UIMenu(title: "", children: children)
    }
  }

  private func buildMenuElements(from descriptors: [[String: Any]]) -> [UIMenuElement] {
    var groups: [[[String: Any]]] = [[]]

    for descriptor in descriptors {
      let type = descriptor["type"] as? String

      if type == "separator" {
        if !(groups.last?.isEmpty ?? true) {
          groups.append([])
        }
        continue
      }

      if groups.isEmpty {
        groups.append([descriptor])
      } else {
        groups[groups.count - 1].append(descriptor)
      }
    }

    let nonEmptyGroups = groups.filter { !$0.isEmpty }

    if nonEmptyGroups.count <= 1, let group = nonEmptyGroups.first {
      return group.compactMap { buildMenuElement(from: $0) }
    }

    return nonEmptyGroups.compactMap { group in
      let children = group.compactMap { buildMenuElement(from: $0) }

      guard !children.isEmpty else {
        return nil
      }

      return UIMenu(title: "", options: .displayInline, children: children)
    }
  }

  private func buildMenuElement(from descriptor: [String: Any]) -> UIMenuElement? {
    guard let type = descriptor["type"] as? String else {
      return nil
    }

    switch type {
    case "item":
      return buildAction(from: descriptor)
    case "submenu":
      return buildSubmenu(from: descriptor)
    case "group":
      return buildGroup(from: descriptor)
    default:
      return nil
    }
  }

  private func buildAction(from descriptor: [String: Any]) -> UIAction? {
    guard let title = descriptor["title"] as? String,
          let actionKey = descriptor["actionKey"] as? String else {
      return nil
    }

    if let hidden = descriptor["hidden"] as? Bool, hidden {
      return nil
    }

    let subtitle = descriptor["subtitle"] as? String
    let iconName = descriptor["iconName"] as? String
    let destructive = descriptor["destructive"] as? Bool ?? false
    let disabled = descriptor["disabled"] as? Bool ?? false
    let attributes = makeAttributes(destructive: destructive, disabled: disabled)

    return UIAction(
      title: title,
      subtitle: subtitle,
      image: makeImage(systemName: iconName),
      identifier: UIAction.Identifier(actionKey),
      discoverabilityTitle: subtitle,
      attributes: attributes
    ) { [weak self] _ in
      self?.onActionPress?(["actionKey": actionKey])
    }
  }

  private func buildSubmenu(from descriptor: [String: Any]) -> UIMenu? {
    guard let title = descriptor["title"] as? String else {
      return nil
    }

    let iconName = descriptor["iconName"] as? String
    let childrenDescriptors = descriptor["children"] as? [[String: Any]] ?? []
    let children = buildMenuElements(from: childrenDescriptors)

    guard !children.isEmpty else {
      return nil
    }

    return UIMenu(
      title: title,
      image: makeImage(systemName: iconName),
      identifier: nil,
      options: [],
      children: children
    )
  }

  private func buildGroup(from descriptor: [String: Any]) -> UIMenu? {
    let title = descriptor["title"] as? String ?? ""
    let childrenDescriptors = descriptor["children"] as? [[String: Any]] ?? []
    let children = buildMenuElements(from: childrenDescriptors)

    guard !children.isEmpty else {
      return nil
    }

    return UIMenu(title: title, options: .displayInline, children: children)
  }

  private func makeImage(systemName: String?) -> UIImage? {
    guard let systemName, !systemName.isEmpty else {
      return nil
    }

    return UIImage(systemName: systemName)
  }

  private func makeAttributes(destructive: Bool, disabled: Bool) -> UIMenuElement.Attributes {
    var attributes: UIMenuElement.Attributes = []

    if destructive {
      attributes.insert(.destructive)
    }

    if disabled {
      attributes.insert(.disabled)
    }

    return attributes
  }
}

@objc(ContextMenuViewManager)
class ContextMenuViewManager: RCTViewManager {
  override func view() -> UIView! {
    ContextMenuView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    true
  }
}
