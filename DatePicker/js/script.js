function Calendar(input) {
    this.now = new Date();
    this.day = this.now.getDate();
    this.month = this.now.getMonth();
    this.year = this.now.getFullYear();

    this.input = input;
    this.divCnt = null;
    this.divHeader = null;
    this.divTable = null;
    this.divDateText = null;
    this.divButtons = null;
}