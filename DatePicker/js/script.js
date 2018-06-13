function Calendar = function() {
...
    this.init = function () {
        this.divCnt = document.createElement('div');
        this.divCnt.classList.add('calendar');

        this.divButtons = document.createElement('div');
        this.divButtons.className = "calendar-prev-next";

        this.divDateText = document.createElement('div');
        this.divDateText.className = 'date-name';


        this.divHeader = document.createElement('div');
        this.divHeader.classList.add('calendar-header');

        this.divHeader.appendChild(this.divButtons);
        this.divHeader.appendChild(this.divDateText);
        this.divCnt.appendChild(this.divHeader);

        this.divTable = document.createElement('div');
        this.divTable.className = 'calendar-table-cnt';
        this.divCnt.appendChild(this.divTable);

        this.calendarWrapper = document.createElement('div');
        this.calendarWrapper.classList.add('input-calendar-cnt');
        this.input.parentElement.insertBefore(this.calendarWrapper, this.input);
        this.calendarWrapper.appendChild(this.input);
    };
};