package com.myproject;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/**
 * Created by clock on 2017/2/8.
 */

public class AnExampleReactPackage implements ReactPackage{
        public ExampleInterface rnExampleInterface;

        @Override
        public List<NativeModule> createNativeModules(ReactApplicationContext reactContext)
        {
                rnExampleInterface = new ExampleInterface(reactContext);

                List<NativeModule> modules = new ArrayList<>();
                modules.add(rnExampleInterface);
                return modules;
        }

        @Override
        public List<Class<? extends JavaScriptModule>> createJSModules()
        {
                return Collections.emptyList();
        }

        @Override
        public List<ViewManager> createViewManagers(ReactApplicationContext reactContext)
        {
                return Collections.emptyList();
        }
}
