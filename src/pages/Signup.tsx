import { authRepository } from "@/modules/auth/auth.repository";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { useCurrentUserStore } from '@/modules/auth/current-user.state';
import { TriangleAlert } from 'lucide-react';

function Signup() {
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false); // パスワード表示用の状態
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUserStore = useCurrentUserStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // エラーメッセージ用の状態

  // ユーザー登録処理
  const signup = async () => {
    setErrorMessage(null); // エラーメッセージをリセット
    try {
      await checkInputValues();
      const user = await authRepository.signup(name, email, password);
      // ユーザー登録に成功
      currentUserStore.set(user);
    }catch(error: any){
      // ユーザー登録に失敗
        console.error("サインアップ失敗:", error.message);
        setErrorMessage(error.message);
    }
  };

  // 入力値チェック処理
  const checkInputValues = () => {
    // ユーザー名: 半角英数字のみ
    if (!/^[A-Za-z0-9]+$/.test(name)) {
      throw new Error("ユーザー名は半角英数字のみ使用できます。");
    }
    // ユーザー名: 文字数チェック
    if (name.length < 4 || name.length > 10) {
      throw new Error("ユーザー名は4文字以上10文字以下で入力してください。");
    }
    // メールアドレス: 日本語不可（ASCII文字のみ）
    if (!/^[\x00-\x7F]+$/.test(email)) {
      throw new Error("メールアドレスは半角数字のみ使用できます。");
    }
    // メールアドレス形式チェック
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("メールアドレスの形式が正しくありません。");
    }
    // パスワード長さチェック
    if (password.length < 6 || password.length > 10) {
      throw new Error("パスワードは6文字以上10文字以下で入力してください。");
    }
  };

  if (currentUserStore.currentUser != null) return <Navigate replace to="/" />;

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
                  htmlFor="username"
                >
                  ユーザー名
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="username"
                    name="username"
                    placeholder="ユーザー名"
                    required
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                </div>
              </div>
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
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
                disabled={name === '' || email === '' || password === ''}
                onClick={signup}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:opacity-50 disabled:cursor-not-allowed">
                  登録
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
