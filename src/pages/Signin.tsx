import { Navigate, Link } from 'react-router-dom';
import { authRepository } from "@/modules/auth/auth.repository";
import { useState } from "react";
import { useCurrentUserStore } from '@/modules/auth/current-user.state';
import { TriangleAlert } from 'lucide-react';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // エラーメッセージ用の状態
  const [showPassword, setShowPassword] = useState(false); // パスワード表示用の状態
  const currentUserStore = useCurrentUserStore();

    const signin = async () => {
      setErrorMessage(null); // エラーメッセージをリセット
      try {
        const user = await authRepository.signin(email, password);
        // ログインに成功
        currentUserStore.set(user);
      }catch(error: any) {
        // ログインに失敗
        console.error("サインイン失敗:", error.message);
        setErrorMessage("メールアドレスまたはパスワードが正しくありません。"); // エラーメッセージを設定
      }
    };

    if(currentUserStore.currentUser != null) return <Navigate replace to="/" />;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Notionクローン
        </h2>
        <div className="mt-8 w-full max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  メールアドレス
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="メールアドレス"
                    required
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  パスワード
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    placeholder="パスワード"
                    required
                    type={showPassword ? "text" : "password"} // チェックボックスの状態に応じて切り替え
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                  />
                </div>
                <div className="mt-2">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={showPassword}
                      onChange={(e) => setShowPassword(e.target.checked)} // チェックボックスの状態を更新
                    />
                    パスワードを表示
                  </label>
                </div>
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm">
                  <TriangleAlert className="inline-block mr-1" />
                  {errorMessage}
                </div> // エラーメッセージを表示
              )}
              <div>
                <button 
                  disabled={email === '' || password === ''}
                  onClick={signin}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500 disabled:opacity-50 disabled:cursor-not-allowed">
                  ログイン
                </button>
              </div>
              <div className="mt-4 text-center text-sm">
                登録は
                <Link className="underline" to={'/signup'}>
                  こちら
                </Link>
                から
              </div>
              <div className="mt-4 text-center text-sm">
                前の画面に戻る場合は
                <Link className="underline" to={'/portfolio'}>
                  こちら
                </Link>
                から
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
