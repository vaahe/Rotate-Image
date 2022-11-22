import GooglePicker from "react-google-picker";

const GoogleDrive = ({ children }: any) => {
  const CLIENT_ID =
    "1091374841348-upsaftml0ouhrfju4g1cennbh8kj2hlu.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDbLCIM5JTPRMuc-Bc6x1smp2AQvXR2DR4";
  const APP_ID = "quick-tools-366711";
  const scope = [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.photos.readonly",
  ];

  return (
    <div className="App">
      <GooglePicker
        clientId={CLIENT_ID}
        developerKey={API_KEY}
        scope={scope}
        //onAuthFailed={onAuthFail}
        navHidden
        mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
        createPicker={(google, oauthToken) => {
          const picker = new google.picker.PickerBuilder()
            .addView(
              new google.picker.DocsView(google.picker.ViewId.DOCS_IMAGES)
            )
            .addView(new google.picker.DocsUploadView())
            .setOAuthToken(oauthToken)
            .setDeveloperKey(API_KEY)
            .setAppId(APP_ID)
            .setCallback((data) => {
              if (data.action === google.picker.Action.PICKED) {
                var fileId = data.docs[0].id;
                alert("The user selected: " + fileId);
              }
            })
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED);

          picker.build().setVisible(true);
        }}
      >
        {children}
      </GooglePicker>
    </div>
  );
};

export default GoogleDrive;
