import { useShoppingCart } from "../../../store/shopping-cart-context";
import { Link } from "react-router-dom";

const TopHeader = () => {
    const {numberOfProductsInCart, openCart} = useShoppingCart()

    return (
        <div className='header__top'>
            <Link to={'/'} className='header__logo'>
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.9167 21.754C16.3711 21.284 19.8875 17.4261 20.1508 12.6397H11.9167V21.754ZM21.9868 12.6397H22V12.0625V0.375L11 0.375001C4.92486 0.375002 -5.31105e-07 5.60767 0 12.0625C5.31105e-07 18.5173 4.92486 23.75 11 23.75C16.893 23.75 21.7036 18.8263 21.9868 12.6397ZM11 2.32292C5.93739 2.32292 1.83333 6.68347 1.83333 12.0625C1.83333 17.1128 5.45112 21.2653 10.0833 21.754V10.6918H20.1667V2.32292H11Z"
                          fill="#1B2437"/>
                </svg>
                Clay Shop
            </Link>
            <div className='header__social-media'>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M16.8576 4.70406C16.8201 3.85391 16.6826 3.26945 16.4856 2.763C16.2824 2.22542 15.9698 1.74412 15.5602 1.34402C15.16 0.937688 14.6755 0.62195 14.144 0.421958C13.6345 0.22502 13.053 0.0875416 12.2027 0.0500587C11.346 0.00940128 11.0741 0 8.90137 0C6.72865 0 6.45669 0.00940128 5.60321 0.0468843C4.7529 0.0843672 4.16833 0.221968 3.6619 0.418784C3.12409 0.62195 2.64271 0.934512 2.24253 1.34402C1.83612 1.74412 1.52044 2.22859 1.32029 2.75994C1.12332 3.26945 0.985813 3.85074 0.948323 4.70088C0.907657 5.55738 0.898254 5.82928 0.898254 8.0016C0.898254 10.1739 0.907657 10.4458 0.945148 11.2991C0.982638 12.1493 1.12026 12.7338 1.31724 13.2402C1.52044 13.7778 1.83612 14.259 2.24253 14.6591C2.64271 15.0655 3.12727 15.3812 3.65873 15.5812C4.16833 15.7782 4.74973 15.9156 5.60016 15.9531C6.45352 15.9907 6.7256 16 8.89833 16C11.0711 16 11.343 15.9907 12.1965 15.9531C13.0468 15.9156 13.6314 15.7782 14.1378 15.5812C15.2133 15.1655 16.0636 14.3154 16.4794 13.2402C16.6763 12.7306 16.8139 12.1493 16.8514 11.2991C16.8888 10.4458 16.8983 10.1739 16.8983 8.0016C16.8983 5.82928 16.8951 5.55738 16.8576 4.70406ZM15.4165 11.2366C15.382 12.018 15.2507 12.44 15.1414 12.7213C14.8724 13.4183 14.3191 13.9715 13.6219 14.2404C13.3406 14.3498 12.9155 14.481 12.137 14.5154C11.2929 14.553 11.0398 14.5622 8.90457 14.5622C6.76931 14.5622 6.51299 14.553 5.67197 14.5154C4.89041 14.481 4.46837 14.3498 4.18701 14.2404C3.84007 14.1122 3.52428 13.909 3.26795 13.6434C3.00222 13.3839 2.79902 13.0713 2.6708 12.7245C2.56137 12.4431 2.4301 12.018 2.39578 11.2398C2.35817 10.3958 2.34889 10.1426 2.34889 8.00784C2.34889 5.87299 2.35817 5.61671 2.39578 4.77597C2.4301 3.99457 2.56137 3.57261 2.6708 3.2913C2.79902 2.94431 3.00222 2.6287 3.27113 2.3723C3.5305 2.10662 3.84313 1.90346 4.19018 1.77538C4.47154 1.66598 4.89676 1.53473 5.67513 1.5003C6.51921 1.46282 6.77249 1.45342 8.90761 1.45342C11.046 1.45342 11.2991 1.46282 12.1402 1.5003C12.9217 1.53473 13.3438 1.66598 13.6251 1.77538C13.9721 1.90346 14.2879 2.10662 14.5442 2.3723C14.8099 2.63174 15.0131 2.94431 15.1414 3.2913C15.2507 3.57261 15.382 3.99762 15.4165 4.77597C15.4539 5.61989 15.4634 5.87299 15.4634 8.00784C15.4634 10.1426 15.4539 10.3927 15.4165 11.2366ZM8.84479 4.27744C6.66601 4.27744 4.89825 6.04508 4.89825 8.224C4.89825 10.4029 6.66601 12.1705 8.84479 12.1705C11.0237 12.1705 12.7913 10.4029 12.7913 8.224C12.7913 6.04508 11.0237 4.27744 8.84479 4.27744ZM8.84479 10.784C7.43131 10.784 6.28477 9.6376 6.28477 8.224C6.28477 6.81038 7.43131 5.66396 8.84479 5.66396C10.2584 5.66396 11.4048 6.81038 11.4048 8.224C11.4048 9.6376 10.2584 10.784 8.84479 10.784ZM12.9474 5.04267C13.4563 5.04267 13.8688 4.63013 13.8688 4.12134C13.8688 3.61242 13.4563 3.2 12.9474 3.2C12.4386 3.2 12.026 3.61242 12.026 4.12134C12.026 4.63013 12.4386 5.04267 12.9474 5.04267Z"
                          fill="#1B2437"/>
                </svg>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18 1.65738C17.3306 1.93846 16.6174 2.12476 15.8737 2.21522C16.6387 1.77799 17.2226 1.09092 17.4971 0.262769C16.7839 0.669845 15.9964 0.95738 15.1571 1.11784C14.4799 0.427538 13.5146 0 12.4616 0C10.4186 0 8.77388 1.58738 8.77388 3.53338C8.77388 3.81338 8.79863 4.08261 8.85939 4.33891C5.7915 4.19568 3.07688 2.78815 1.25325 0.643999C0.934872 1.17276 0.748122 1.77799 0.748122 2.42953C0.748122 3.65291 1.40625 4.73737 2.38725 5.36522C1.79437 5.35445 1.21275 5.18968 0.719997 4.93014C0.719997 4.94091 0.719997 4.95491 0.719997 4.96891C0.719997 6.68552 1.99912 8.11137 3.6765 8.43983C3.37613 8.51844 3.04875 8.55614 2.709 8.55614C2.47275 8.55614 2.23425 8.54321 2.01037 8.49583C2.4885 9.89478 3.84526 10.9232 5.4585 10.9566C4.203 11.8968 2.60887 12.4632 0.883122 12.4632C0.580497 12.4632 0.29025 12.4503 0 12.4148C1.63462 13.4238 3.57188 14 5.661 14C12.4515 14 16.164 8.61537 16.164 3.94799C16.164 3.79184 16.1584 3.64107 16.1505 3.49138C16.8829 2.99384 17.4982 2.37245 18 1.65738Z"
                        fill="#1B2437"/>
                </svg>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M6.683 18V8.99896H9.5189L9.89471 5.89714H6.683L6.68781 4.34465C6.68781 3.53565 6.77555 3.10217 8.10174 3.10217H9.87464V0H7.03833C3.63148 0 2.43235 1.50471 2.43235 4.03517V5.89749H0.308746V8.99931H2.43235V18H6.683Z"
                          fill="#1B2437"/>
                </svg>
            </div>
            <div className='header__icons'>
                <button className='btn search-btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.5" cy="9.5" r="7.5" stroke="#1B2437" strokeWidth="2"/>
                        <path d="M15 15L22 22" stroke="#1B2437" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>

                <button className='btn cart-btn' onClick={openCart}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M16.9959 5.2216C16.889 2.33823 14.7166 0 12 0C9.21371 0 7 2.45968 7 5.44444V8H5.11324C4.15956 8 3.36171 8.69484 3.26943 9.60575L2.00869 22.0502C2.0029 22.1074 2 22.1648 2 22.2222C2 23.2041 2.82939 24 3.8525 24H20.1474C20.2072 24 20.267 23.9972 20.3266 23.9917C21.3449 23.8966 22.0902 23.0274 21.9912 22.0502L20.7304 9.60575C20.6382 8.69484 19.8403 8 18.8866 8H17V5.44444L16.9959 5.2216ZM15 8V5.44444C15 3.52001 13.632 2 12 2C10.4243 2 9.09466 3.41699 9.00483 5.24685L9 5.44444V8H15ZM20 22L18.7621 10H5.23792L4 22H20Z"
                              fill="#1B2437"/>
                    </svg>
                    <span className='products-in-cart'>{numberOfProductsInCart}</span>
                </button>

            </div>
        </div>
    )
}

export default TopHeader