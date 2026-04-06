import { useState, type FormEvent } from 'react'
import { Button, Label, TextInput, Textarea, Alert } from 'flowbite-react'
import { useLanguage } from '../context/LanguageContext'

// ✏️ Replace with your API key from https://www.staticforms.dev/dashboard
const STATIC_FORMS_API_KEY = 'sf_9f82843991a4e804560fdffc'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
    const { t } = useLanguage()
    const f = t.about.form

    const [status, setStatus]   = useState<Status>('idle')
    const [values, setValues]   = useState({ name: '', email: '', message: '' })
    const [errors, setErrors]   = useState<Partial<typeof values>>({})

    function validate() {
        const e: Partial<typeof values> = {}
        if (!values.name.trim())    e.name    = f.errorName
        if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
            e.email   = f.errorEmail
        if (!values.message.trim()) e.message = f.errorMessage
        return e
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setErrors({})
        setStatus('sending')

        try {
            const res = await fetch('https://api.staticforms.dev/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    apiKey:   STATIC_FORMS_API_KEY,
                    name:     values.name,
                    email:    values.email,
                    message:  values.message,
                    honeypot: '',   // spam protection — must be empty
                }),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                setStatus('success')
                setValues({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setValues(prev => ({ ...prev, [name]: value }))
        if (errors[name as keyof typeof errors])
            setErrors(prev => ({ ...prev, [name]: undefined }))
    }

    if (status === 'success') {
        return (
            <Alert color="success" className="rounded-xl">
                <p className="font-serif text-lg font-normal mb-1">{f.successTitle}</p>
                <p className="text-sm">{f.successBody}</p>
            </Alert>
        )
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
                <Label
                    htmlFor="name"
                    className="font-mono text-[11px] font-medium text-(--color-site-subtle) tracking-[0.06em] uppercase"
                >
                    {f.labelName}
                </Label>
                <TextInput
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder={f.placeholderName}
                    color={errors.name ? 'failure' : 'gray'}
                />
                {errors.name && (
                    <p className="text-[12px] text-red-500 mt-0.5">{errors.name}</p>
                    )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
                <Label
                    htmlFor="email"
                    className="font-mono text-[11px] font-medium text-(--color-site-subtle) tracking-[0.06em] uppercase"
                >
                    {f.labelEmail}
                </Label>
                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder={f.placeholderEmail}
                    color={errors.email ? 'failure' : 'gray'}
                />
                {errors.name && (
                    <p className="text-[12px] text-red-500 mt-0.5">{errors.name}</p>
                )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
                <Label
                    htmlFor="message"
                    className="font-mono text-[11px] font-medium text-(--color-site-subtle) tracking-[0.06em] uppercase"
                >
                    {f.labelMessage}
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder={f.placeholderMessage}
                    rows={5}
                    color={errors.message ? 'failure' : 'gray'}
                    className="resize-none"
                />
                {errors.name && (
                    <p className="text-[12px] text-red-500 mt-0.5">{errors.name}</p>
                )}
            </div>

            {/* Submit */}
            <Button
                type="submit"
                disabled={status === 'sending'}
                className="!bg-(--color-teal) hover:!bg-(--color-teal-dark) focus:ring-0 w-full"
                size="md"
            >
                {status === 'sending' ? f.sending : f.submit}
            </Button>

            {status === 'error' && (
                <Alert color="failure">
                    <span className="text-sm">{f.errorGeneral}</span>
                </Alert>
            )}
        </form>
    )
}
