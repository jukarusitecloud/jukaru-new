'use client'

export default function SecurityPolicyPage() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">セキュリティポリシー</h1>
        <p className="mb-4">
          当社では、お客様の情報を安全に管理し、セキュリティ対策を徹底しています。本セキュリティポリシーは、当社が提供するサービスのご利用に関する情報の取り扱い方針を定めたものです。
        </p>
        <h2 className="text-2xl font-semibold mb-4">1. 情報の暗号化</h2>
        <p className="mb-4">
          お客様の情報は、SSL/TLSによる暗号化を使用して保護されています。また、データはAES-256暗号化技術を利用して保存されています。
        </p>
        <h2 className="text-2xl font-semibold mb-4">2. アクセス制限</h2>
        <p className="mb-4">
          当社は、お客様の情報に対する不正なアクセスを防止するため、厳格なアクセス制限を実施しています。従業員は必要最小限の情報にのみアクセスする権限を持ちます。
        </p>
        <h2 className="text-2xl font-semibold mb-4">3. データバックアップ</h2>
        <p className="mb-4">
          万が一のデータ損失に備えて、定期的にバックアップを実施しています。これにより、迅速なデータ復旧が可能です。
        </p>
        <p>本ポリシーは、必要に応じて変更されることがあります。</p>

        {/* 戻るボタン */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
          >
            戻る
          </button>
        </div>
      </div>
    )
  }
  