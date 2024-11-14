'use client'

import { useRouter } from 'next/navigation'

export default function LegalNoticePage() {
    const router = useRouter();

    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">特定商取引法に基づく表記</h1>
        <h2 className="text-2xl font-semibold mb-4">事業者・責任者氏名</h2>
        <p className="mb-4">田島 京志郎</p>
        
        <h2 className="text-2xl font-semibold mb-4">所在地</h2>
        <p className="mb-4">埼玉県※詳細な所在地については「お問い合わせ先メールアドレス」へご請求をいただければ、遅滞なく開示いたします。</p>
        
        <h2 className="text-2xl font-semibold mb-4">お問い合わせ先</h2>
        <p className="mb-4">メールアドレス: service@ju-karu.jp</p>
        <p className="mb-4">電話番号については「お問い合わせ先メールアドレス」へご請求をいただければ、遅滞なく開示いたします。</p>
        
        <h2 className="text-2xl font-semibold mb-4">販売価格</h2>
        <p className="mb-4">各サービスの販売価格は、トップページにて表示されます。</p>
        
        <h2 className="text-2xl font-semibold mb-4">支払方法</h2>
        <p className="mb-4">クレジットカード、銀行振込</p>
        
        <h2 className="text-2xl font-semibold mb-4">支払時期</h2>
        <p className="mb-4">銀行振込：初回申し込みから3日以内、次月以降毎月1日　クレジットカード決済：初回は申し込み時に決済、次月以降は申込日を基準として毎月基準日に決済</p>
        
        <h2 className="text-2xl font-semibold mb-4">サービスの提供時期</h2>
        <p className="mb-4">銀行振込：入金確認後、すぐにご利用開始となります。　クレジットカード：決済完了後、すぐにご利用開始となります。</p>
        
        <h2 className="text-2xl font-semibold mb-4">返品・キャンセルについて</h2>
        <p className="mb-4">
          デジタルサービスの性質上、返品・キャンセルは原則として受け付けておりません。詳細は利用規約をご確認ください。月額費用の解約はいつでもマイページから行っていただけます。次回決済日までに解約をしていただければ、次回以降の請求は発生いたしません。日割りでの返金は承っておりません。
        </p>

      {/* 戻るボタン */}
      <div className="text-center mt-8">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
        >
          戻る
        </button>
      </div>
    </div>
  )
}
