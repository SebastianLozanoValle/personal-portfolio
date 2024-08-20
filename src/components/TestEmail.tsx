'use client'

export const TestEmail = () => {
    return (
        <button
            onClick={async () => {
                const res = await fetch('/api/send', {
                    method: 'POST',
                })
                const data = await res.json()
                console.log(data)
            }}
            className="lg:flex font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500"
        >
            Enviar Correo De Prueba
        </button>
    )
}