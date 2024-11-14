'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Lock, Phone, Shield, User, Users } from "lucide-react"
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
}

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}

export function JuzeroMonochromeLandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <motion.header 
        className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-6 bg-transparent'}`}
        animate={{ height: scrolled ? 60 : 80 }}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              JūZéro
            </motion.div>
            <div className="space-x-4">
              <a href="#overview" className="text-gray-600 hover:text-gray-800 transition-colors">製品概要</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-800 transition-colors">料金プラン</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">お問い合わせ</a>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              手書きカルテの手間から解放
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              シンプル操作の電子カルテで、ひとり接骨院でもラクラク導入
            </p>
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/demo">
                無料デモを試す
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">サービス概要</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <FileText className="mr-2" />
                    患者カルテの作成・管理
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  患者の診療履歴や治療内容を効率的に記録。
                </CardContent>
              </Card>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <CheckCircle className="mr-2" />
                    レポート機能
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  患者ごとの治療内容や経過を迅速に把握。
                </CardContent>
              </Card>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Shield className="mr-2" />
                    データのセキュリティ保護
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  患者データを安全に管理するため、最新の暗号化技術を採用。
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">柔道整復師に最適化された電子カルテ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "紙カルテでの手書き記録に費やす時間の削減",
              "シンプルな機能で業務効率化",
              "ひとり接骨院でも簡単に導入",
              "既存のレセコンをそのまま使用可能",
              "管理者設定機能で従業員の記録時間管理が可能"
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center p-4 bg-white shadow-md rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="text-blue-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">シンプルな料金プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gray-100">
                  <CardTitle className="text-gray-800 flex items-center justify-between">
                    <span>ひとり接骨院プラン</span>
                    <User className="text-blue-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Badge className="bg-blue-500 text-white mb-2">初回3ヶ月間50%割引</Badge>
                    <p className="text-3xl font-bold text-gray-800">¥600 <span className="text-sm font-normal">/月</span></p>
                    <p className="text-sm text-gray-600">初回3ヶ月間</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gray-800">¥1,200 <span className="text-sm font-normal">/月</span></p>
                    <p className="text-sm text-gray-600">4ヶ月目以降</p>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> 全機能利用可能</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> 1ユーザーアカウント</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> 24時間サポート</li>
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105">
                    今すぐ申し込む
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gray-100">
                  <CardTitle className="text-gray-800 flex items-center justify-between">
                    <span>多人数プラン</span>
                    <Users className="text-blue-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Badge className="bg-blue-500 text-white mb-2">複数スタッフ対応</Badge>
                    <p className="text-3xl font-bold text-gray-800">¥2,500 <span className="text-sm font-normal">/月</span></p>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> 全機能利用可能</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> 複数ユーザーアカウント</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> 管理者設定機能</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> 24時間サポート</li>
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105">
                    今すぐ申し込む
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <p className="text-center mt-8 text-gray-600">※ 取引はすべて日本円（JPY）で行われます。</p>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">データ保護とセキュリティ</h2>
          <div className="max-w-3xl mx-auto">
            <motion.p 
              className="text-center mb-8 text-gray-600"
              initial="hidden"
              animate="visible"
              variants={slideIn}
            >
              JūZéroは、お客様のデータを最高レベルのセキュリティで保護します。
              データ暗号化、不正アクセス防止、24時間365日の監視システムを採用し、安全な環境を提供しています。
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Lock, text: "SSL暗号化とAES-256暗号化技術の使用" },
                { icon: Shield, text: "厳格なアクセス制限とデータバックアップ" },
                { icon: User, text: "個人情報保護法に準拠したプライバシーポリシー" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial="hidden"
                  animate="visible"
                  variants={slideIn}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <item.icon className="text-blue-500 w-8 h-8" />
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">簡単導入 – 3ステップで開始</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { icon: User, title: "アカウント登録", description: "簡単な情報入力で即時アカウント作成" },
              { icon: FileText, title: "基本設定", description: "接骨院の情報や必要データの登録" },
              { icon: CheckCircle, title: "利用開始", description: "デモチュートリアルで簡単に操作方法を学習" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-center mb-8"
                initial="hidden"
                animate="visible"
                variants={slideIn}
                transition={{ delay: index * 0.3 }}
              >
                <div className="bg-gray-200 rounded-full p-4 mr-6">
                  <step.icon className="text-gray-800 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">お問い合わせ</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="mb-8 text-gray-600">
              サービスや利用方法に関する質問について、以下のサポートフォームからお問い合わせの対応をいたします。
            </p>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2" />
              <Link href="/contact">
              お問い合わせ
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">J0（ジュ―ゼロ）</h3>
              <p className="text-gray-400">柔道整復師向け電子カルテサービス</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/security-policy" className="text-gray-400 hover:text-white transition-colors">セキュリティポリシー</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="/legal-notice" className="text-gray-400 hover:text-white transition-colors">特定商取引法に基づく表記</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">お問い合わせ</h3>
              <p className="text-gray-400">service@ju-karu.jp</p>
              
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>&copy; 2024 J0 rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}