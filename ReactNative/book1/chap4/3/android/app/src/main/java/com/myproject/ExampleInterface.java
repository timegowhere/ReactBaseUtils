package com.myproject;

import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by clock on 2017/2/8.
 */

public class ExampleInterface extends ReactContextBaseJavaModule{
        ReactApplicationContext aContext;

        public ExampleInterface(ReactApplicationContext reactContext)
        {
                super(reactContext);
                aContext = reactContext;
        }

        @Override
        public String getName()
        {
                return "ExampleInterface";
        }

        @ReactMethod
        public void HandleMessage(String aMessage) {
                Log.i("RNMessage", "received message from RN: " + aMessage);

                Intent aIntent = new Intent(Intent.ACTION_PICK);
                aIntent.setType(ContactsContract.Contacts.CONTENT_TYPE);
                Bundle b = new Bundle();
                aContext.startActivityForResult(aIntent, 1, b);
        }

        public void sendMessage(String aMessage)
        {
                aContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("AndroidToRNMessage", aMessage);
        }
}
