import GoogleLogin from "react-google-login";

const clientId: string = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_KEY ?? "";

// interface params {
//     onGoogleLogin: Function;
// }

export default function GoogleButton(params: { onGoogleLogin: Function }) {
    const onSuccess = async (response: any) => {
        console.log(response);

        const {
            googleId,
            profileObj: { email, name },
        } = response;

        await params.onGoogleLogin({
            socialId: googleId,
            socialType: "google",
            email,
            nickname: name,
        });
    };

    const onFailure = (error: any) => {
        console.log(error);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
}
