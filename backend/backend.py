from cuesdk import (CueSdk, CorsairDeviceFilter, CorsairDeviceType, CorsairError)

sdk = CueSdk()

def on_state_changed(evt):
   print(evt.state)

err = sdk.connect(on_state_changed)

details, err = sdk.get_session_details()
print(details)

devices, err = sdk.get_devices(
        CorsairDeviceFilter(device_type_mask=CorsairDeviceType.CDT_Keyboard))
if err == CorsairError.CE_Success:
   for d in devices:
      print(sdk.get_device_info(d.device_id))