#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NativeImageColors, NSObject)

RCT_EXTERN_METHOD(getColors:(NSString *)uri
                  options:(NSDictionary *)options
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end
