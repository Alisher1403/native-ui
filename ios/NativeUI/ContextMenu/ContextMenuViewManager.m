#import <React/RCTComponent.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(ContextMenuViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(menuConfig, NSArray)
RCT_EXPORT_VIEW_PROPERTY(disabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onActionPress, RCTBubblingEventBlock)

@end
