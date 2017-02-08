package com.myproject;

import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by clock on 2017/2/8.
 */

public class ExampleInterface extends ReactContextBaseJavaModule{
        public ExampleInterface(ReactApplicationContext reactContext) {
                super(reactContext);
        }

        @Override
        public String getName() {
                return "ExampleInterface";
        }

        @ReactMethod
        public void HandleMessage(String aMessage) {
                Log.i("RNMessage", "received message from RN: " + aMessage);
        }
}
