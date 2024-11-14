'use client'

import { useRouter } from 'next/navigation'

export default function TermsOfServicePage() {
  const router = useRouter()
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">クラウド電子カルテサービス利用規約</h1>
      <p>
        本利用規約（以下「本規約」）は、当方が提供するクラウド電子カルテサービスJ0（以下「本サービス」）の利用に関する条件を定めたものです。利用者（以下「ユーザー」）は、本規約に同意したうえで、本サービスを利用するものとします。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第1条（適用範囲）</h2>
      <p>
        本規約は、本サービスの利用に関する一切の関係に適用されます。<br />
        当社が本規約に付随するガイドラインや注意事項を提供した場合、それらも本規約の一部を構成します。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第2条（定義）</h2>
      <p>
        <strong>ユーザー：</strong> 本規約に同意し、当社の提供する本サービスを利用する全ての者。<br />
        <strong>患者情報：</strong> 本サービスを通じて収集、管理、または保存される、患者の個人情報および医療情報。<br />
        <strong>ユーザーコンテンツ：</strong> ユーザーが本サービス上に保存、投稿するすべてのデータ（患者情報を含む）。<br />
        <strong>当社コンテンツ：</strong> 本サービスに含まれるシステム、設計、インターフェース、データベースなど、当社が保有するすべての知的財産。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第3条（アカウントの作成と管理）</h2>
      <p>
        ユーザーは、正確な情報を用いてアカウントを作成するものとします。不正確または虚偽の情報での登録は禁止されています。<br />
        アカウント情報の管理責任はユーザーにあります。ユーザーは第三者とアカウント情報を共有しないものとし、不正使用による損害について当社は一切責任を負いません。<br />
        ユーザーの不正利用が確認された場合、当社は事前通知なしにアカウントの一時停止または削除を行うことができます。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第4条（サービス内容と提供条件）</h2>
      <p>
        本サービスは、患者情報の管理や保存、アクセス、共有を効率化するためのツールとして提供されます。医療行為そのものを支援する目的ではありません。<br />
        当社は、ユーザーの承諾を得ることなく本サービスの内容を変更または停止する場合があります。これにより生じた損害について、当社は一切の責任を負いません。<br />
        本サービスは、現状有姿で提供されるものであり、サービスの可用性やエラーのない提供を保証するものではありません。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第5条（利用料金と支払い）</h2>
      <p>
        本サービスの利用には、別途定める利用料金が発生します。料金や支払い方法は、サービスサイト上で明示します。<br />
        ユーザーが利用料金の支払いを遅延した場合、当社はアカウント停止または契約解除の措置を取ることができます。<br />
        支払い済みの利用料金は、特別な事情がない限り返金できません。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第6条（ユーザーの責任）</h2>
      <p>
        ユーザーは、本サービスを通じて取得または保存する患者情報に関し、個人情報保護法や医療情報に関する法令を遵守し、適正に管理するものとします。<br />
        ユーザーは、患者情報の取り扱いに関し、必要な同意を得た上で情報を登録・保存し、当社が指定するセキュリティ設定を遵守するものとします。<br />
        本サービス利用に関するユーザーの一切の行為については、ユーザーが責任を負うものとし、当社はそれに起因する一切の責任を負いません。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第7条（禁止事項）</h2>
      <p>
        ユーザーは、本サービスの利用に際し、以下の行為を行ってはなりません。<br />
        ・虚偽の情報登録、アカウントの不正利用<br />
        ・第三者の個人情報や知的財産権を侵害する行為<br />
        ・本サービスのリバースエンジニアリング、ソースコードの解析、複製<br />
        ・当社のサーバーやネットワークへの不正アクセスまたは妨害行為<br />
        ・公序良俗に反する行為およびその他当社が不適切と判断する行為
      </p>

      <h2 className="text-2xl font-semibold mt-8">第8条（知的財産権とライセンス）</h2>
      <p>
        本サービスに関する知的財産権は全て当社に帰属します。ユーザーは、当社の事前の書面による承諾なく、サービス内容や機能の複製、改変、配布、再販売を行ってはなりません。<br />
        ユーザーが本サービス上に保存するユーザーコンテンツについては、ユーザーがその所有権を保持します。ただし、当社はサービス運営のため、利用者コンテンツを閲覧、保管、バックアップする権利を有します。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第9条（免責事項）</h2>
      <p>
        <strong>データ消失・漏洩に対する責任の免除：</strong><br />
        本サービスに保存されたデータの消失、破損、漏洩、またはユーザーの操作ミスによる損害について、当社は一切の責任を負いません。これには、サーバーの故障、第三者による不正アクセス、その他のシステム障害によるデータ消失や利用不能が含まれますが、それらに限定されません。<br />
        <strong>サービスの可用性および適合性の保証：</strong><br />
        当社は、本サービスが適切に動作すること、エラーが発生しないこと、または特定の目的に適合することを保証するものではありません。本サービスに関連して生じた直接的または間接的な損害に関して、当社は一切の責任を負いません。<br />
        <strong>第三者からの請求・訴訟に関する責任：</strong><br />
        ユーザーが本規約または法令に違反したことに起因する第三者からの請求や訴訟が発生した場合、ユーザーの費用と責任でこれを解決するものとし、当社は一切関知しません。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第10条（個人情報の取り扱い）</h2>
      <p>
        当社は、ユーザーおよび患者の個人情報を、当社の定めるプライバシーポリシーに基づき適切に管理します。<br />
        当社は、本サービスの提供に必要な範囲で、ユーザーの情報を利用し、法令の要請がない限り第三者に開示しません。<br />
        プライバシーポリシーに変更があった場合、当社は速やかに通知し、利用者の同意を得ることなく施行する場合があります。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第11条（契約の解除）</h2>
      <p>
        当社は、以下の場合、事前通知なく本サービスの提供を停止し、またはユーザーとの契約を解除することができます。<br />
        ・ユーザーが本規約に違反した場合<br />
        ・ユーザーが一定期間サービスを利用しない場合<br />
        ・本サービスの提供が困難となった場合（自然災害、法的制約等）<br />
        本サービスの停止または契約解除によって生じるいかなる損害についても、当社は一切責任を負いません。
      </p>

      <h2 className="text-2xl font-semibold mt-8">第12条（本規約の改定）</h2>
      <p>
        当社は、必要に応じて本規約を変更する権利を有します。本規約の変更は、当社のウェブサイト上での告知により効力を発揮するものとします。<br />
        ユーザーが本規約の変更後も引き続き本サービスを利用する場合、変更後の規約に同意したものとみなします。
      </p>

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