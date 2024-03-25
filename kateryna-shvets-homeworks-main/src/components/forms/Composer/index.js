import '../../../theme/composer.scss';
import logo from '../../../theme/assets/profile.png';

export const Composer = () => {
    const formContent = {
        placeholderText: 'What\'s on your mind, Elon Mask?',
        buttonText:      'запостить',
        altImage:        'avatar',
        typeButton:      'submit',
        typeInput:       'text',
    };

    return (
        <section>
            <h1 className = 'composer-title'>Стена</h1>
            <div className = 'composer'>
                <form>
                    <img
                        src = { logo }
                        alt = { formContent.altImage } />
                    <textarea
                        placeholder = { formContent.placeholderText }
                        type = { formContent.typeInput }></textarea>
                    <button type = { formContent.typeButton }>{ formContent.buttonText }</button>
                </form>
            </div>
        </section>
    );
};
