import '../../theme/navigation.scss';

export const Navigation = () => {
    const userNav = {
        name: 'Chuck Norris',
    };
    const statusNav = true;
    const online = {
        background: '#578843',
    };

    const offline = {
        background: '#f40009',
    };

    return (
        <div className = 'navigation-item'>
            <div className = 'navigation-avatar'>
                <div className = 'user-status'>
                    <span style = { statusNav ? online : offline }></span>
                </div>
                <h3 className = 'navigation-profile'>{ userNav.name }</h3>
                <a href = '#'>
                    <svg
                        viewBox = '0 0 24 24' aria-hidden = 'true'
                        width = '22' height = '22'
                        fill = 'currentColor'
                        className = 'r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr'>
                        <g><path d = 'M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z'></path>
                            <path d = 'M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z'></path></g></svg>
                    Профиль
                </a>
                <a href = '#' className = 'navigation-home'>
                    <svg
                        viewBox = '0 0 24 24' fill = 'currentColor'
                        width = '20' height = '20'
                        aria-hidden = 'true' className = 'r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr'><g>
                            <path d = 'M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z'></path>
                        </g></svg>
                    Стена
                </a>
                <button className = 'logout'>Выйти</button>
            </div>
        </div>
    );
};
