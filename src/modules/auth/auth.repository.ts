import { supabase } from "@/lib/supabase"


export const authRepository = {
    async signup(name: string, email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name } },
        });
        if (error !== null) {
            // メールアドレス重複エラーをチェック
            if (error.message.includes("User already registered")) {
                throw new Error("このメールアドレスは既に登録されています。");
            }
            // その他のエラーの場合
            throw new Error(error.message || "ユーザー登録に失敗しました。");
        }
        if (!data.user) {
            throw new Error("ユーザー登録に失敗しました。");
        }
        return {
            ...data.user,
            userName: data.user?.user_metadata
        }
    },

    async signin(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        //if (error !== null || !data.user) throw new Error(error?.message);
        if (error !== null || !data.user) {
            throw new Error(error?.message || "サインインに失敗")
        }
        return {
            ...data.user,
            userName: data.user?.user_metadata
        };
    },

    async getCurrentUser() {
        const { data, error } = await supabase.auth.getSession()
        if (error != null) throw new Error(error.message);
        if (data.session == null) return;
        return {
            ...data.session.user,
            userName: data.session.user.user_metadata,
        }
    },

    async signout() {
        const { error } = await supabase.auth.signOut();
        if (error != null) throw new Error(error.message);
        return true;
    }
}