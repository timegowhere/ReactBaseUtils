package com.myproject;

import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;

import com.facebook.imagepipeline.*;
import com.facebook.imagepipeline.BuildConfig;
import com.facebook.react.*;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyProject";
    }

   // @Override
    //protected boolean getUseDeveloperSupport() {return BuildConfig.DEBUG;}

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        if(requestCode != 1 || resultCode != RESULT_OK)
            return;

        Uri contactData = data.getData();
        Cursor cursor = managedQuery(contactData, null, null, null, null);
        cursor.moveToFirst();
        String toRNMessage = this.getContactInfo(cursor);
        MainApplication app = (MainApplication)getApplication();
        app.anExampleReactPackage.rnExampleInterface.sendMessage(toRNMessage);
    }

    private String getContactInfo(Cursor cursor)
    {
        return "user: abcd, phone: 12345678";
    }

}
