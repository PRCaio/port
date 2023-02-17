import React, { useState, useEffect, useMemo } from "react";
import { Viewer } from "@itwin/web-viewer-react";
import { BrowserAuthorizationClient } from "@itwin/browser-authorization";

export const MyViewerComponent = () => {
  const iTwinId = "myITwinId";
  const iModelId = "myIModelId";

  const authClient = useMemo(
    () =>
      new BrowserAuthorizationClient({
        scope: "profile email",
        clientId: "my-oidc-client",
        redirectUri: "https://myredirecturi.com",
        postSignoutRedirectUri: "https://mypostsignouturi.com",
        responseType: "code",
      }),
    []
  );

  return (
    <Viewer
      authClient={authClient}
      iTwinId={iTwinId}
      iModelId={iModelId}
      enablePerformanceMonitors={true}
    />
  );
};