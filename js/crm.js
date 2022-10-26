(() => {
  const telSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><circle cx="8" cy="8" r="8" fill="#9873FF"/><path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>`;
  const EmailSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/></g></svg>`;
  const VkSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/></g></svg>`;
  const FacebookSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/></g></svg>`;
  const otherSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/></g></svg>`;

  const scroll = new SimpleBar(document.getElementById('simplebar'));
  const tableBody = document.querySelector('.table__body');
  const headerSeachContainer = document.querySelector('.header__seachcontainer');
  const headerInput = document.querySelector('.header__input');
  const headerID = document.querySelector('.header__id');
  const headerFIO = document.querySelector('.header__fio');
  const headerCreate = document.querySelector('.header__create');
  const headerModify = document.querySelector('.header__modify');
  const newclientHeader = document.querySelector('.newclient__header');
  const newclientUpperrow = document.querySelector('.newclient__upperrow');
  const newclientDirectLink = document.querySelector('.newclient__directlink');
  const formSurname = document.querySelector('.surname');
  const formName = document.querySelector('.name');
  const formLastName = document.querySelector('.lastName');
  const formErrorMessage = document.querySelector('.errormessage');
  const newclientButtoncontainer = document.querySelector('.neclient__buttoncontainer');
  const placeholder = document.querySelectorAll('.newclient__placeholder');
  const newclientSavepath = document.querySelector('.newclient__savepath');
  const newclientEditpath = document.querySelector('.newclient__editpath');
  const blocklist = document.querySelector('.blocklist');
  const surnameText = document.getElementById('surname');
  const nameText = document.getElementById('name');
  const lastNameText = document.getElementById('lastName');
  const formNewclient = document.querySelector('.newclient');
  const newclientBlocklist = document.querySelector('.newclient__blocklist');
  const delclientBlocklist = document.querySelector('.delclient__blocklist');
  const newclientAdd = document.querySelector('.newclient__add');
  const formDelclient = document.querySelector('.delclient');
  const displayError2 = document.querySelector('.delclient__errormessage');
  const fio = document.querySelectorAll('.newclient__input');
  const newclientAddContact = document.querySelector('.newclient__addcontact');
  const contacts0 = document.getElementById('contacts_0');
  const contacts1 = document.getElementById('contacts_1');
  const contacts2 = document.getElementById('contacts_2');
  const tab0 = document.getElementById('tab_0');
  const tab1 = document.getElementById('tab_1');
  const tab2 = document.getElementById('tab_2');
  const newclientTabs = document.querySelector('.newclient__tabs');
  const clientsTableContainer = document.querySelector('.clients__tablecontainer');
  const seachList = document.querySelector('.header__seachlist');
  const seachBlockList = document.querySelector('.seach__blocklist');

  let clientsList = [];
  let clientsSeachList = [];
  let currentContacts = 0;
  let currentID = 0;
  let currentButton = null;
  let timeoutID;
  let fieldSort = '1';
  let upSort = true;
  let rowNum = 0;
  let editRow = 0;
  let contactsInCol = +4;
  let maxContacts = +10;
  let rowHeight = +60;
  let focusID = null;

  function clientSeach () {
    const query = headerInput.value;
    clearTimeout(timeoutID);
    seachList.innerHTML = '';
    if (query.trim()) {
      timeoutID = setTimeout(filterClientsList, 300);
    } else {
      clientsSeachList = [];
      seachList.removeAttribute('style');
      seachBlockList.removeAttribute('style');
    };

    function filterClientsList() {
      getSeachList(query);
    };
  };

  function fillClientsSeachList () {
    if (clientsSeachList.length > 0) {
      seachBlockList.style.display = 'block';
      seachList.style.display = 'block';
      clientsSeachList.forEach(el => {
        const line = document.createElement('li');
        line.innerHTML = `${el.surname} ${el.name} ${el.lastName}`.trim();
        line.tabIndex = 0;
        line.id = el.id;

        line.addEventListener('keydown', (e) => {
          if (e.keyCode === 40) {
            line.nextSibling ? line.nextSibling.focus() : {};
          } else if (e.keyCode === 38) {
            line.previousSibling ? line.previousSibling.focus() : {};
          } else if (e.keyCode === 13) seachFocus(line.id, line.innerHTML);
        });

        line.addEventListener('mouseover', () => line.focus());
        line.addEventListener('click', () => seachFocus(line.id, line.innerHTML));
        seachList.append(line);
      });
    } else {
      seachBlockList.removeAttribute('style');
      seachList.removeAttribute('style');
    };
  };

  function seachFocus (id, fio) {
    editRow = 0;
    headerInput.value = fio;
    for (i = 0; i < clientsList.length; i++) {
      if (clientsList[i].id === id) break; else editRow++;
    };
    scroll.getScrollElement().scrollTo(0, editRow * rowHeight);
    tableBody.childNodes[editRow].style.background = '#e0df9d';
    focusID = id;
    SeachReset(true);
  };

  function SeachReset (ok) {
    !ok ? headerInput.value = '' : {};
    clientsSeachList = [];
    seachList.innerHTML = '';
    seachBlockList.removeAttribute('style');
    seachList.removeAttribute('style');
  };

  function initSort(column) {
    if (column === fieldSort) {
      upSort = !upSort;
    } else {
      fieldSort = column;
      upSort = true;
    };

    headerCorrection();
    dataSort();
    tableBody.innerHTML = ``;
    clientsList.forEach(element => {
      fillClientssList(element);
    });
    focusID ? seachFocus (focusID, headerInput.value) :
    scroll.getScrollElement().scrollTo(0, 0);
  };

  function headerCorrection() {
    const sortHeaders = [headerID, headerFIO, headerCreate, headerModify];
    let sortedHeader;

    sortHeaders.forEach(el => {
      el.classList.remove('sorted');
      el.firstElementChild.classList.add('arrow_down');
    });

    if (fieldSort === '1') {
      sortedHeader = headerID;
    } else if (fieldSort === '2') {
      sortedHeader = headerFIO;
    } else if (fieldSort === '3') {
      sortedHeader = headerCreate;
    } else {
      sortedHeader = headerModify;
    };

    sortedHeader.classList.add('sorted');
    upSort ? sortedHeader.firstElementChild.classList.remove('arrow_down') : {};
  };

  function dataSort() {
    if (fieldSort === '1') {
      upSort ?
      clientsList.sort(function(a, b){return a.id - b.id}) :
      clientsList.sort(function(a, b){return b.id - a.id});
    } else if (fieldSort === '2') {
      upSort ?
      clientsList.sort((a, b) => ((a.surname + a.name + a.lastName).toLowerCase() >= (b.surname + b.name + b.lastName).toLowerCase()) ? 1 : -1) :
      clientsList.sort((b, a) => ((a.surname + a.name + a.lastName).toLowerCase() >= (b.surname + b.name + b.lastName).toLowerCase()) ? 1 : -1);
    } else if (fieldSort === '3') {
      upSort ?
      clientsList.sort(function(a, b){return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()}) :
      clientsList.sort(function(a, b){return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()});
    } else {
      upSort ?
      clientsList.sort(function(a, b){return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()}) :
      clientsList.sort(function(a, b){return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()});
    };
  };

  function fillClientForm(client) {
    if (client) {
      currentID = client.id;
      let currentLink = window.location;
      history.pushState("", document.title, window.location.pathname + window.location.search);
      newclientHeader.innerHTML = `Изменить данные<p class="newclient__id">ID: ${client.id}</p>`;
      newclientUpperrow.style.marginBottom = '0';
      newclientDirectLink.style.display = 'block';
      newclientDirectLink.innerHTML = `${currentLink}#${client.id}<div class="directlink__popup">скопировать ссылку</div>`;
      formSurname.value = client.surname;
      formName.value = client.name;
      formLastName.value = client.lastName;
      client.contacts.forEach(contact => addContact(contact));
    } else {
      newclientHeader.innerHTML = `Изменить данные<p class="newclient__id">ID:</p>`;
      formErrorMessage.style.marginBottom = '9px';
      newclientButtoncontainer.style.paddingTop = '8px';
    };

    placeholder.forEach(el => el.classList.add('newclient__placeholder_edit'));
    newclientSavepath.classList.add('hidden');
    newclientEditpath.classList.remove('hidden');

    clientForm();
  };

  function clientForm() {
    blocklist.style.display = 'flex';
    formNewclient.style.display = 'flex';
  };

  function reset() {
    currentButton ? currentButton.classList.remove('table__del_loading') : {};

    if (blocklist.style.zIndex === '3') {
      blocklist.style.zIndex = '2';
    } else {
      newclientHeader.innerHTML = `Новый клиент`;

      placeholder.forEach(el => el.classList.remove('newclient__placeholder_edit'));
      fio.forEach (el => el.value = '');
      surnameText.style.color = '#B0B0B0';
      nameText.style.color = '#B0B0B0';

      newclientSavepath.classList.remove('hidden');
      newclientEditpath.classList.add('hidden');

      formNewclient.removeAttribute('style');
      newclientBlocklist.removeAttribute('style');
      newclientUpperrow.removeAttribute('style');
      newclientDirectLink.removeAttribute('style');
      delclientBlocklist.removeAttribute('style');
      blocklist.removeAttribute('style');

      newclientBlocklist.classList.remove('newclient__blocklist_loading');
      delclientBlocklist.classList.remove('newclient__blocklist_loading');

      formErrorMessage.style.marginBottom = '0';
      formErrorMessage.innerHTML = '';
      displayError2.style.marginBottom = '0';
      displayError2.innerHTML = '';

      newclientAdd.style.display = 'flex';
      newclientButtoncontainer.style.paddingTop = '25px';

      const contacts = document.querySelectorAll('.newclient__contact');
      contacts.forEach (el => delContact(el));
    };

    formDelclient.style.display = 'none';
  };

  function addContact(contact) {
    const div = document.createElement('div');
    const select = document.createElement('select');
    const input = document.createElement('input');

    div.classList.add('newclient__contact');
    select.classList.add('newclient__select');
    input.classList.add('contact__input');
    input.placeholder = 'Введите данные контакта';

    div.append(select);
    div.append(input);

    input.addEventListener('focus', () => {
      input.classList.remove('red');
      input.style.color = 'black';
    });

    const choises = new Choices(select, {
      choices: [
        {value: 'tel', label: 'Телефон'},
        {value: 'Email', label: 'Email'},
        {value: 'Vk', label: 'Vk'},
        {value: 'Facebook', label: 'Facebook'},
        {value: 'other', label: 'Другое'},
      ],
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: ''
    });

    currentContacts++;

    if (contact) {
      choises.setChoiceByValue(contact.type);
      input.value = contact.value;
      setMask(select, true);

      const removeContact = document.createElement('div');
      removeContact.classList.add('newclient__remove');
      div.append(removeContact);

      const popup = document.createElement('div');
      popup.innerHTML = 'Удалить';
      popup.classList.add('popup');

      removeContact.append(popup);
      removeContact.addEventListener('click', () => delContact(div));
      tabsVisualisation('edit');
    } else {
      setMask(select, false);
      tabsVisualisation(null);
    };

    select.addEventListener('change', () => setMask(select, false));
    newclientAddContact.classList.add('newclient__addcontact_added');

    if (currentContacts <= contactsInCol) {
      contacts0.append(div);
    } else if (currentContacts <= contactsInCol * 2) {
      contacts1.append(div);
    } else contacts2.append(div);

    if (currentContacts === maxContacts) {
      newclientAdd.style.display = 'none';
      newclientAddContact.classList.remove('newclient__addcontact_added');
    };
  };

  function tabsVisualisation(tab) {
    if (tab === 'del') {
      const contacts = document.querySelectorAll('.newclient__contact');
      for (i = 0; i < contacts.length; i++) {
        if (i < +4 && contacts[i].parentNode.id !== 'contacts_0') {
          contacts[i].parentNode.removeChild(contacts[i]);
          contacts0.append(contacts[i]);
        } else if (i > +3 && i < +8 && contacts[i].parentNode.id !== 'contacts_1') {
          contacts[i].parentNode.removeChild(contacts[i]);
          contacts1.append(contacts[i]);
        } else if (i > +7 && contacts[i].parentNode.id !== 'contacts_2') {
          contacts[i].parentNode.removeChild(contacts[i]);
          contacts2.append(contacts[i]);
        };
      };
    };

    if(!tab || tab === 'del' || tab === 'edit') {
      if (tab === 'edit') {
        contacts0.classList.add('newclient__visible');
        contacts1.classList.remove('newclient__visible');
        contacts2.classList.remove('newclient__visible');

        tab0.classList.add('newclient__tab_active');
        tab1.classList.remove('newclient__tab_active');
        tab2.classList.remove('newclient__tab_active');
      };

      if (currentContacts <= contactsInCol) {
        contacts0.classList.add('newclient__visible');
        contacts1.classList.remove('newclient__visible');
        contacts2.classList.remove('newclient__visible');
        newclientTabs.classList.remove('newclient__tabs_visible');

      } else if (currentContacts <= contactsInCol * 2) {
        if (tab !== 'edit') {
          contacts0.classList.remove('newclient__visible');
          contacts1.classList.add('newclient__visible');
          contacts2.classList.remove('newclient__visible');

          tab0.classList.remove('newclient__tab_active');
          tab1.classList.add('newclient__tab_active');
          tab2.classList.remove('newclient__tab_active');
        };
        newclientTabs.classList.add('newclient__tabs_visible');
        tab0.classList.add('newclient__visible');
        tab1.classList.add('newclient__visible');
        tab2.classList.remove('newclient__visible');

      } else {
        if (tab !== 'edit') {
          contacts0.classList.remove('newclient__visible');
          contacts1.classList.remove('newclient__visible');
          contacts2.classList.add('newclient__visible');

          tab0.classList.remove('newclient__tab_active');
          tab1.classList.remove('newclient__tab_active');
          tab2.classList.add('newclient__tab_active');
        };
        newclientTabs.classList.add('newclient__tabs_visible');
        tab0.classList.add('newclient__visible');
        tab1.classList.add('newclient__visible');
        tab2.classList.add('newclient__visible');
      };

    } else if (tab === 'tab_0') {
      contacts0.classList.add('newclient__visible');
      contacts1.classList.remove('newclient__visible');
      contacts2.classList.remove('newclient__visible');

      tab0.classList.add('newclient__tab_active');
      tab1.classList.remove('newclient__tab_active');
      tab2.classList.remove('newclient__tab_active');

    } else if (tab === 'tab_1') {
      contacts0.classList.remove('newclient__visible');
      contacts1.classList.add('newclient__visible');
      contacts2.classList.remove('newclient__visible');

      tab0.classList.remove('newclient__tab_active');
      tab1.classList.add('newclient__tab_active');
      tab2.classList.remove('newclient__tab_active');

    } else {
      contacts0.classList.remove('newclient__visible');
      contacts1.classList.remove('newclient__visible');
      contacts2.classList.add('newclient__visible');

      tab0.classList.remove('newclient__tab_active');
      tab1.classList.remove('newclient__tab_active');
      tab2.classList.add('newclient__tab_active');
    };
  };

  function delContact(div) {
    div.parentNode.removeChild(div);
    currentContacts--;
    newclientAdd.style.display = 'flex';
    newclientAddContact.classList.add('newclient__addcontact_added');
    tabsVisualisation('del');

    if(currentContacts === +0) {
      newclientAddContact.classList.remove('newclient__addcontact_added');
    };
  };

  function setMask(select, init) {
    const input = select.parentNode.parentNode.parentNode.querySelector('.contact__input');

    if(!init) input.value = '';

    Inputmask.remove(input);

    if (select.value === 'tel') {
      Inputmask("+7 (999)-999-99-99").mask(input);

    } else if (select.value === 'Vk') {
      Inputmask({
        mask: "vk.com/*{1,20}",
        definitions: {
          '*': {
            validator: "[0-9A-Za-z_-]"
          }
        }
      }).mask(input);

    } else if (select.value === 'Facebook') {
      Inputmask({
        mask: "f\аcebook.com/*{1,20}",
        definitions: {
          '*': {
            validator: "[0-9A-Za-z_-]"
          }
        }
      }).mask(input);
    };
  };

  function parseInput(element) {
    let inputText = element.value;
    let lastSymbol = inputText.substring(inputText.length - 1);

    if (!lastSymbol.match(/[\p{Alpha}^ ^-]/u)) {
      inputText = inputText.slice(0, inputText.length - 1);
      element.value = inputText;
    };
  };

  function checkSave(clientID) {
    const newClient = {};
    const contacts = [];

    let errorMessage = 'Ошибка: ';
    let contactErrors = '!';
    let errors = null;
    let emptyContacts = null;

    formErrorMessage.style.marginBottom = '0';
    formErrorMessage.innerHTML = '';
    newclientButtoncontainer.style.paddingTop = '25px';

    if (!formSurname.value.trim()) {
      errorMessage = errorMessage + 'не заполнено поле "Фамилия"';
      errors = true;
      surnameText.style.color = 'red';
    } else newClient.surname = formSurname.value.trim();

    if (!formName.value.trim()) {
      errors ? errorMessage = errorMessage + ', не заполнено поле "Имя"' : errorMessage = errorMessage + 'не заполнено поле "Имя"';
      errors = true;
      nameText.style.color = 'red';
    } else newClient.name = formName.value.trim();

    newClient.lastName = formLastName.value.trim();

    if (currentContacts) {
      document.querySelectorAll('.contact__input').forEach(el => {
        const contact = {};
        const key = el.parentNode.querySelector('.newclient__select').value;

        if (el.value.trim()) {
          if ((key === 'tel') && (el.inputmask.unmaskedvalue().length < 10)) {
            errors ? contactErrors = ', некорректно введен номер телефона' + contactErrors : contactErrors = 'некорректно введен номер телефона' + contactErrors;
            errors = true;
            el.style.color = 'red';
          } else if ((key === 'Email') && (!validateEmail(el.value))) {
            errors ? contactErrors = ', некорректно введен Email' + contactErrors : contactErrors = 'некорректно введен Email' + contactErrors;
            errors = true;
            el.style.color = 'red';
          } else {
            contact.type = key;
            contact.value = el.value;
            contacts.push(contact);
          };

        } else if (!emptyContacts) {
          errors ? errorMessage = errorMessage + ', не заполнены данные контакта' : errorMessage = errorMessage + 'не заполнены данные контакта';
          errors = true;
          emptyContacts = true;
          el.classList.add('red');

        } else el.classList.add('red');
      });

      newClient.contacts = contacts;
    };

    if (errors) {
      formErrorMessage.innerHTML = errorMessage + contactErrors;
      formErrorMessage.style.marginBottom = '9px';
      newclientButtoncontainer.style.paddingTop = '8px';
    } else {
      clientID ? patchClient(clientID, newClient) : postClient(newClient);
    };
  };

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  function formatDate(date) {
    let day = date.getDate();
    if (day < +10) day = '0' + day;
    let month = date.getMonth() + 1;
    if (month < +10) month = '0' + month;
    let hour = date.getHours();
    if (hour < +10) hour = '0' + hour;
    let min = date.getMinutes();
    if (min < +10) min = '0' + min;
    return `${day}.${month}.${date.getFullYear()} <p class="table__time">${hour}:${min}</p>`;
  }

  function fillClientssList(client) {
    const currentRow = rowNum;
    const row = document.createElement('tr');
    const id = document.createElement('td');
    const fio = document.createElement('td');
    const createDate = document.createElement('td');
    const editDate = document.createElement('td');
    const contacts = document.createElement('td');
    const actions = document.createElement('td');
    const edit = document.createElement('div');
    const del = document.createElement('div');
    const createDateOut = new Date(client.createdAt);
    const editDateOut = new Date(client.updatedAt);

    row.classList.add('table__row');
    id.classList.add('table__id');
    fio.classList.add('table__cell');
    fio.classList.add('table__fio');
    createDate.classList.add('table__cell');
    createDate.classList.add('table__date');
    editDate.classList.add('table__cell');
    editDate.classList.add('table__date');
    contacts.classList.add('table__contacts');
    actions.classList.add('table__actions');
    actions.classList.add('table__cell');
    edit.classList.add('table__edit');
    del.classList.add('table__del');

    id.innerHTML = client.id.slice(0, 6);
    fio.innerHTML = `${client.surname} ${client.name} ${client.lastName}`;
    createDate.innerHTML = formatDate(createDateOut);
    editDate.innerHTML = formatDate(editDateOut);
    fillContactsCell(contacts, client.contacts, false);
    edit.innerHTML = `Изменить`;
    del.innerHTML = `Удалить`;

    const cells = [id, fio, createDate, editDate, contacts, actions];
    cells.forEach(el => row.append(el));

    actions.append(edit);
    actions.append(del);

    tableBody.append(row);

    del.addEventListener('click', () => delForm(client.id, del));
    edit.addEventListener('click', () => getClient(client.id, edit, currentRow));

    rowNum++;
  };

  function fillContactsCell(cell, contacts, all) {
    cell.innerHTML = '';

    if (!all && contacts.length > 4) {
      for (let i = 0; i < 4; i++) {
        addContactPict(cell, contacts[i]);
      };

      const contactLink = document.createElement('div');
      contactLink.innerHTML = `+${contacts.length - 4}`;
      contactLink.classList.add('tooltip_plus');

      cell.append(contactLink);
      contactLink.addEventListener('click', () => fillContactsCell(cell, contacts, true));

    } else {
      contacts.forEach(el => {
        addContactPict(cell, el);
      });
    };
  };

  function addContactPict(cell, contact) {
    const contactLink = document.createElement('div');
    const popup = document.createElement('div');

    let contactType = ``;
    contactLink.classList.add('tooltip');
    popup.classList.add('popup_text');

    if (contact.type === 'tel') {
      contactLink.innerHTML = telSvg;
      contactType = `Телефон:&nbsp`
      popup.innerHTML = `<p class="popup_contact">${contactType}</p><a href="tel:${contact.value}">${contact.value}</a>`;
    } else if (contact.type === 'Email') {
      contactLink.innerHTML = EmailSvg;
      contactType = `Email:&nbsp`
      popup.innerHTML = `<p class="popup_contact">${contactType}</p><a href="mailto:${contact.value}">${contact.value}</a>`;
    } else if (contact.type === 'Vk') {
      contactLink.innerHTML = VkSvg;
      contactType = `Vk:&nbsp`
      popup.innerHTML = `<p class="popup_contact">${contactType}</p><a href="https://${contact.value}">${contact.value.slice(7)}</a>`;
    } else if (contact.type === 'Facebook') {
      contactLink.innerHTML = FacebookSvg;
      contactType = `Facebook:&nbsp`
      popup.innerHTML = `<p class="popup_contact">${contactType}</p><a href="http://www.facebook.com/${contact.value.slice(13)}">${contact.value.slice(13)}</a>`;
    } else {
      contactLink.innerHTML = otherSvg;
      popup.innerHTML = `<p class="popup_contact">${contactType}</p><a href="https://maps.google.com/?q=${contact.value}">${contact.value}</a>`;
    };

    contactLink.append(popup);
    cell.append(contactLink);

    contactLink.addEventListener('mouseover', () => popupStyle(contactLink, popup));
    contactLink.addEventListener('mouseout', () => popupHide(popup));
  };

  function popupStyle (contactLink, popup) {
    let frame = document.querySelector('.simplebar-mask');
    let mask = frame.getBoundingClientRect().top;
    let pic = contactLink.getBoundingClientRect().top;

    (pic - mask >= 33 + 18) ? popup.classList.add('popup_top') : popup.classList.add('popup_bottom');
  };

  function popupHide(popup) {
    popup.classList.remove('popup_top');
    popup.classList.remove('popup_bottom');
  }

  function delForm(id, del) {
    del ? del.classList.add('table__del_loading') : {};

    if (formNewclient.style.display === 'flex') {
      blocklist.style.zIndex = '3';
    } else blocklist.style.zIndex = '2';

    blocklist.style.display = 'flex';
    formDelclient.style.display = 'flex';

    currentID = id;
    currentButton = del;
  };

  function directLink () {
    if (location.hash) {
      reset();
      reset();
      getClient(location.hash.slice(1), false, 0);
    };
  };

  function copyToBuffer () {
    let text = newclientDirectLink.innerHTML;
    text = text.slice(0, text.indexOf('<'));
    navigator.clipboard.writeText(text);
    document.querySelector('.directlink__popup').innerHTML = 'скопировано';
  };

  function labelUp (label) {
    label.style.color = '#B0B0B0';
    label.classList.add('newclient__placeholder_edit');
  };

  function labelDown (input, label) {
    !input.value.trim() ? label.classList.remove('newclient__placeholder_edit') : {};
  };

  async function postClient(newClient) {
    newclientBlocklist.classList.add('newclient__blocklist_loading');
    newclientBlocklist.style.display = 'block';

    try {
      const response = await fetch(`http://localhost:3000/api/clients`, {
        method: 'POST',
        body: JSON.stringify(newClient),
      });

      if (response.status === 200 || response.status === 201) {
        reset();
        clientSeach();
      } else {
        formErrorMessage.style.marginBottom = '9px';
        formErrorMessage.innerHTML = response.statusText;
        newclientBlocklist.removeAttribute('style');
      };

    } catch (err) {
      formErrorMessage.style.marginBottom = '9px';
      formErrorMessage.innerHTML = 'Что-то пошло не так...';
      newclientBlocklist.removeAttribute('style');
    };
  };

  async function getClientsList() {
    clientsTableContainer.classList.add('clients__container_loading');

    const response = await fetch(`http://localhost:3000/api/clients`);
    clientsList = await response.json();

    dataSort();

    clientsList.forEach(element => {
      fillClientssList(element);
    });

    clientsTableContainer.classList.remove('clients__container_loading');
    scroll.getScrollElement().scrollTo(0, editRow * rowHeight);
    editRow = 0;
  };

  async function getSeachList (query) {
    const response = await fetch(`http://localhost:3000/api/clients?search=${query}`);
    clientsSeachList = await response.json();

    fillClientsSeachList();
  };

  async function delClient() {
    delclientBlocklist.classList.add('delclient__blocklist_loading');
    delclientBlocklist.style.display = 'block';

    try {
      const response = await fetch(`http://localhost:3000/api/clients/${currentID}`, {
        method: 'DELETE'
      });

      if (response.status === 200 || response.status === 201) {
        getClientsList();
        reset();
        clientSeach();

      } else {
        displayError2.style.marginBottom = '9px';
        displayError2.innerHTML = response.statusText;
        delclientBlocklist.classList.remove('delclient__blocklist_loading');
      };

    } catch (err) {
      displayError2.style.marginBottom = '9px';
      displayError2.innerHTML = 'Что-то пошло не так...';
      delclientBlocklist.classList.remove('delclient__blocklist_loading');
    };

    currentButton.classList.remove('table__del_loading');
    currentButton = null;
  };

  async function getClient(id, edit, row) {
    edit ? edit.classList.add('table__edit_loading') : {};

    try {
      editRow = row;

      const response = await fetch(`http://localhost:3000/api/clients/${id}`);
      const client = await response.json();

      if (response.status === 200 || response.status === 201) {
        fillClientForm(client);

      } else {
        fillClientForm(null);
        formErrorMessage.innerHTML = response.statusText;
        newclientBlocklist.style.display = 'block';
      };

      edit ? edit.classList.remove('table__edit_loading'): {};

    } catch (err) {
      fillClientForm(null);
      formErrorMessage.innerHTML = 'Что-то пошло не так...';
      newclientBlocklist.style.display = 'block';
      edit ? edit.classList.remove('table__edit_loading') : {};
    };
  };

  async function patchClient(currentID, Client) {
    newclientBlocklist.classList.add('newclient__blocklist_loading');
    newclientBlocklist.style.display = 'block';

    try {
      const response = await fetch(`http://localhost:3000/api/clients/${currentID}`, {
        method: 'PATCH',
        body: JSON.stringify(Client),
      });

      if (response.status === 200 || response.status === 201) {
        reset();
        clientSeach();

      } else {
        formErrorMessage.style.marginBottom = '9px';
        formErrorMessage.innerHTML = response.statusText;
        newclientBlocklist.removeAttribute('style');
      };

    } catch (err) {
      formErrorMessage.style.marginBottom = '9px';
      formErrorMessage.innerHTML = 'Что-то пошло не так...';
      newclientBlocklist.removeAttribute('style');
    };
  };

  document.addEventListener('DOMContentLoaded', function() {
    headerInput.addEventListener('input', () => clientSeach());
    document.querySelector('.clients__addclient').addEventListener('click', () => clientForm());

    document.querySelector('.save').addEventListener('click', () => checkSave(null));
    document.querySelector('.patch').addEventListener('click', () => checkSave(currentID));

    blocklist.addEventListener('click', () => reset());
    document.querySelector('.cancel').addEventListener('click', () => reset());
    document.querySelector('.newclient__close').addEventListener('click', () => reset());
    document.querySelector('.delclient__cancel').addEventListener('click', () => reset());
    document.querySelector('.delclient__close').addEventListener('click', () => reset());
    seachBlockList.addEventListener('click', () => SeachReset(false));

    document.querySelector('.delclient__del').addEventListener('click', () =>delClient());
    newclientAdd.addEventListener('click', () => addContact());

    tab0.addEventListener('click', () => tabsVisualisation('tab_0'));
    tab1.addEventListener('click', () => tabsVisualisation('tab_1'));
    tab2.addEventListener('click', () => tabsVisualisation('tab_2'));

    document.querySelector('.delete').addEventListener('click', () => delForm(currentID));
    fio.forEach (el => el.addEventListener('input', () => parseInput(el)));

    formSurname.addEventListener('focus', () => labelUp(surnameText));
    formSurname.addEventListener('blur', () => labelDown(formSurname, surnameText));
    formName.addEventListener('focus', () => labelUp(nameText));
    formName.addEventListener('blur', () => labelDown(formName, nameText));
    formLastName.addEventListener('focus', () => labelUp(lastNameText));
    formLastName.addEventListener('blur', () => labelDown(formLastName, lastNameText));

    headerID.addEventListener('click', () => initSort('1'));
    headerFIO.addEventListener('click', () => initSort('2'));
    headerCreate.addEventListener('click', () => initSort('3'));
    headerModify.addEventListener('click', () => initSort('4'));

    document.querySelector('.logo_320').addEventListener('click', () => headerSeachContainer.classList.toggle('header__seachcontainer_show'));
    window.addEventListener('resize', () => window.innerWidth < 560 ? clientsTableContainer.style.maxWidth = window.innerWidth + 'px': clientsTableContainer.removeAttribute('style'));

    window.addEventListener('hashchange', () => directLink());
    newclientDirectLink.addEventListener('click', () => copyToBuffer());
    newclientDirectLink.addEventListener('mouseout', () => document.querySelector('.directlink__popup').innerHTML = 'скопировать ссылку');

    headerInput.addEventListener('keydown', (e) => {(clientsSeachList.length > 0 && e.keyCode === 40) ? seachList.firstChild.focus() : {}});
    headerInput.addEventListener('click', () => {headerInput.value = ''; focusID = null; tableBody.childNodes.forEach(el => el.removeAttribute('style'))});

    getClientsList();
    directLink();
  });
})();
