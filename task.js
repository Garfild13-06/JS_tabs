const big_tabs = document.querySelectorAll('.tabs');

big_tabs.forEach((big_tab) => {
    const tabs = big_tab.querySelectorAll('.tab');
    const tab__contents = big_tab.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {

        tab.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.classList.remove('tab_active')
            })
            tab.classList.add('tab_active');

            tab__contents.forEach((tab__content) => {
                tab__content.classList.remove('tab__content_active');
            })
            tab__contents[index].classList.add('tab__content_active');
        })
    })
})

