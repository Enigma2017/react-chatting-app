import '../../theme/footer.scss';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className = 'footer'>
            <p>
                &#169; Lectrum LLC { currentYear }. Версия: 1.0.9
            </p>
        </footer>
    );
};
