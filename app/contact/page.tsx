// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // mailtoリンクを構成
    const subject = encodeURIComponent("お問い合わせ")
    const body = encodeURIComponent(
      `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n\nお問い合わせ内容:\n${formData.message}`
    )
    // 受信先のメールアドレスを指定してください
    const recipient = "service@ju-karu.jp" // ← ここに送信先のメールアドレスを指定

    // mailtoリンクにリダイレクト
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-lg mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800 mb-4">
            お問い合わせ
          </CardTitle>
          <p className="text-center text-gray-600">
            サービスに関するご質問やご相談について、お気軽にお問い合わせください。「送信する」のボタンを押してお客様のデフォルトのメールアプリから送信をお願いいたします。
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                お名前
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                お問い合わせ内容
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              送信する
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
