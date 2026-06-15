package com.nativeui.ui.imagecolors

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeImageColorsPackage : BaseReactPackage() {
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
    if (name == NativeImageColorsModule.NAME) NativeImageColorsModule(reactContext) else null

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      NativeImageColorsModule.NAME to ReactModuleInfo(
        NativeImageColorsModule.NAME,
        NativeImageColorsModule::class.java.name,
        false,
        false,
        false,
        false,
      ),
    )
  }
}
