import { Navigation } from '../../components/Navigation';
import { Composer } from '../../components/forms/Composer';
import { Post } from '../../components/Posts';
import { RecentComments } from '../../components/RecentComments';
import { Footer } from '../../components/Footer';
import '../../theme/feed.scss';

export const Feed = () => {
    return (
        <div className = 'container'>
            <main className = 'flex'>
                <Navigation />
                <div>
                    <Composer />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <RecentComments />
            </main>
            <Footer />
        </div>
    );
};
