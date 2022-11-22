import React from "react";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "mzeb9h7amurcofm";

const Dropbox = ({ children }: any) => {
  const handleSuccess = (files: any) => {
    console.log(files);
  };

  return (
    <DropboxChooser
      appKey={APP_KEY}
      success={handleSuccess}
      cancel={() => console.log("canceled")}
      multiselect={false}
    >
      {children}
    </DropboxChooser>
  );
};

export default Dropbox;
