import {
    Timeline as FlowbiteTimeline,
    TimelineItem,
    TimelineContent,
    TimelineTime,
    TimelineTitle,
    TimelineBody,
} from "flowbite-react";
import { Chapter, Container, Section } from "./BaseUI";
import { FaCircle } from "react-icons/fa6";
import { IconType } from "react-icons";

/**
 * TimelinePoint を独自実装
 * @param icon アイコンコンポーネント
 * @param className 独自のクラス名
 */
type CustomTimelinePointProps = {
    icon: IconType;
    className?: string;
};
const CustomTimelinePoint = ({ icon: Icon, className = "" }: CustomTimelinePointProps) => {
    return (
        <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full">
            <Icon className={`w-3 h-3 ${className}`} />
        </div>
    );
};

// ===== タイムライン型定義 =====
type timelineItem = {
    icon: IconType;
    className?: string;
    year: string;
    title: string;
    body: string;
}

/**
 * Timelineコンポーネント
 */
function Timeline() {
    const timelineItems: timelineItem[] = [
        // {
        //     icon: FaCircle,
        //     className: "text-gray-300",
        //     year: "2022 - 2023",
        //     title: "新卒入社",
        //     body: "基幹システムの設計・開発に従事。主にJava/Spring Bootを利用。",
        // },
        // {
        //     icon: FaCircle,
        //     className: "text-gray-300",
        //     year: "2023 - 2024",
        //     title: "Webアプリ開発",
        //     body: "React/Vue を中心としたフロントエンド開発を担当。",
        // },
        // {
        //     icon: FaCircle,
        //     className: "text-gray-300",
        //     year: "2024 - 現在",
        //     title: "フルスタックエンジニア",
        //     body: "SupabaseやAWSを利用したモダンなWebサービスを開発中。",
        // },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2020 / 4",
            title: "ゼミ参加",
            body: "統計学を中心としたゼミに参加。計算と情報の収集の一貫でR言語やPythonに触れる。プログラミングの楽しさを知る。",
        },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2022 / 4",
            title: "新卒入社",
            body: "SIer企業に入社。新卒研修を受講。",
        },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2022 / 10 - 2023 / 4",
            title: "ポイントカードシステムのリプレイス案件",
            body: "新卒研修を経て、ポイントカードシステムのリプレイス案件に参画。主に、詳細設計-保守まで担当。Java/Spring Bootを利用。",
        },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2023 / 5",
            title: "大学入試成績管理システム開発案件",
            body: "大学入試成績管理システムの新規開発案件に参画。主に、基本設計-保守まで担当。Java/Spring Bootを利用。ここでSQLの力をつける。",
        },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2023 / 10 - 2024 / 3",
            title: "dポイント・PONTAポイントシステムの改修案件",
            body: "大学入試成績管理システム案件と並行して着手。Spring Bootのバージョンアップや、シミュレーター開発を担当。",
        },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2024 / 10 - 2024 / 11",
            title: "英検システムの改修案件",
            body: "英検システムの改修案件に参画。新規API通信処理の作成を担当。設計書を初めて作成するメンバーのサポートも実施。",
        },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2024 / 12",
            title: "新卒入社した会社を退社",
            body: "約2年半の勤務を経て、SIer企業を退社。",
        },
        {
            icon: FaCircle,
            className: "text-gray-300",
            year: "2025 - 現在",
            title: "注文書ペーパーレス化対応案件",
            body: "クラウドサインを使用した注文書のペーパーレス化対応を行っています。並行して、Reactを使用したWebアプリ開発の勉強も行っています。",
        },
    ];
    return (
        <Section id="timeline">
            <Container>
                <Chapter title="Timeline" subTitle="Work Experience" />
                <div className="mt-10">
                    <FlowbiteTimeline>
                        {/* timelineItemsの件数分ループ */}
                        {timelineItems.map((item, index) => (
                            <TimelineItem key={index}>
                                <CustomTimelinePoint icon={item.icon} className={item.className} />
                                <TimelineContent>
                                    <TimelineTime>{item.year}</TimelineTime>
                                    <TimelineTitle>{item.title}</TimelineTitle>
                                    <TimelineBody>
                                        {item.body}
                                    </TimelineBody>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </FlowbiteTimeline>
                </div>
            </Container>
        </Section>
    );
}

export default Timeline;
