import { ReactChild, ReactElement } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface MainProps {
    className?: string;
    children?: ReactChild;
}

const Main = ({ className, children }: MainProps): ReactElement => {
    return (
        <div className="full-width">
            <Header />
            <main
                className={`section page-content w-screen min-h-screen p-10 bg-gray-100 text-gray-800 ${
                    className ?? ''
                }`}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Main;
