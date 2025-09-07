// ===== セクション共通UI =====
/**
 * ページの各セクションをラップするコンポーネント
 * @param id セクションのID（任意）
 * @param children 描画するコンテンツ
 */
type SectionProps = {
    id?: string;
    children: React.ReactNode;  // 画面に描画する要素すべて取得 → childrenと設定
    // 他の要素を受け取る場合はここに追加
};
export const Section = ({ id, children }: SectionProps) => {
    return (
        <section id={id} className="py-16 md:py-24">{children}</section>
    )
};

// ===== コンテイナー共通UI =====
/**
 * コンテンツの横幅を中央に揃えて制御するコンポーネント
 * @param children 描画するコンテンツ
 */
type ContainerProps = {
    children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="w-full max-w-[1100px] mx-auto px-4">
            {children}
        </div>
    );
};

// ===== セクションタイトル共通UI =====
/**
 * セクションごとの見出しを表示するコンポーネント
 * @param title メインタイトル
 * @param subTitle サブタイトル（任意）
 */
type ChapterProps = {
    title: string;
    subTitle?: string;
};
export const Chapter = ({ title, subTitle }: ChapterProps) => {
    return (
        <div>
            {subTitle && (
                <p className="uppercase text-sm tracking-widest text-gray-400">
                    {subTitle}
                </p>
            )}
            <h2 className="text-3xl font-bold">{title}</h2>
        </div>
    )
};


