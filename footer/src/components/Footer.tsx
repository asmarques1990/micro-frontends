import "../index.css";

interface FooterProps {
    username: string
}

export const Footer = ({ username }: FooterProps) => {
    return (
        <footer className="bg-blue-700 text-white font-bold text-3xl p-5">
            Footer
            <div style={{ float: 'right' }}>Welcome {username}</div>
        </footer>
    )
}