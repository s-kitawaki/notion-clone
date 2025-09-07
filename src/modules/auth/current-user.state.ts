import { User } from "@supabase/supabase-js";
import { atom, useAtom } from "jotai";

type AuthStatus = "unknown" | "authenticated" | "signedOut";

type CurrentUserState = {
    currentUser?: User;
    authStatus: AuthStatus;
};

const currentUserAtom = atom<CurrentUserState>({
    currentUser: undefined,
    authStatus: "unknown", // 初期状態は「未判定」
});

export const useCurrentUserStore = () => {
    const [state, setState] = useAtom(currentUserAtom);

    // ログインしているユーザの管理メソッド
    const set = (user?: User) => {
        setState({
            currentUser: user,
            authStatus: user ? "authenticated" : "unknown",
        });
    };

    // ログアウトを管理するメソッド
    const signout = () => {
        setState({
            currentUser: undefined,
            authStatus: "signedOut",
        });
    };

    return {
        currentUser: state.currentUser,
        authStatus: state.authStatus,
        set,
        signout,
    };
};