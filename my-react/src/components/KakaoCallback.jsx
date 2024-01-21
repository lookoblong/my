import React, { useEffect } from "react";
import { useEffect } from "react";

function KakaoCallback() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    axios
      .post("/api/client/login/oauth/kakao", {
        authorizationCode: code,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.headers.accessToken);

        window.location.href = "/";
      })
      .catch((err) => {
        alert(err.res.data.detail);

        window.location.href = "/login";
      });
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
}

export default KakaoCallback;
