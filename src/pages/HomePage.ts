import {type Page, type Locator} from "@playwright/test";
import { BasePage} from "./BasePage";

export class HomePage extends BasePage {
    readonly page!: Page;
    readonly IoTDashboard: Locator;
    readonly forms: Locator;
    readonly formsLayouts: Locator;
    readonly datePicker: Locator;
    readonly modalAndOverlays: Locator;
    readonly dialog: Locator;
    readonly windos: Locator;
    readonly popover: Locator;
    readonly toaster: Locator;
    readonly tooltip: Locator;
    readonly extraComponents: Locator;
    readonly charts: Locator;
    readonly echarts: Locator;
    readonly tablesAndData: Locator;
    readonly smartTable: Locator;
    readonly treeGrid: Locator;
    readonly auth: Locator;
    readonly login: Locator;
    readonly register: Locator;
    readonly requestPassword: Locator;
    readonly resetPassword: Locator;

    constructor(page: Page) {
        super(page);

        this.IoTDashboard = page.locator('text=IoT Dashboard');
        this.forms = page.locator('text=Forms');
        this.formsLayouts = page.locator('text=Form Layouts');
        this.datePicker = page.locator('text=Datepicker');
        this.modalAndOverlays = page.locator('text=Modal & Overlays');
        this.dialog = page.locator('text=Dialog');
        this.windos = page.locator('text=Window');
        this.popover = page.locator('text=Popover');
        this.toaster = page.locator('text=Toastr');
        this.tooltip = page.locator('text=Tooltip');
        this.extraComponents = page.locator('text=Extra Components');
        this.charts = page.locator('text=Charts');
        this.echarts = page.locator('text=Echarts');
        this.tablesAndData = page.locator('text=Tables & Data');
        this.smartTable = page.locator('text=Smart Table');
        this.treeGrid = page.locator('text=Tree Grid');
        this.auth = page.locator('text=Auth');
        this.login = page.locator('text=Login');
        this.register = page.locator('text=Register');
        this.requestPassword = page.locator('text=Request Password');
        this.resetPassword = page.locator('text=Reset Password');

    }
    async openDashBoard(){
        await this.IoTDashboard.click();
    }
    async closeDashBoard(){
        await this.IoTDashboard.click();
    }
    async openForms(){
        await this.forms.click();
    }
    async closeForms(){
        await this.forms.click();
    }
    async openFormsLayouts(){
        await this.formsLayouts.click();
    }
    async closeFormsLayouts(){
        await this.formsLayouts.click();
    }
    async openDatePicker(){
        await this.datePicker.click();
    }
    async closeDatePicker(){
        await this.datePicker.click();
    }
    async openModalAndOverlays(){
        await this.modalAndOverlays.click();
    }
    async closeModalAndOverlays(){
        await this.modalAndOverlays.click();
    }

    async openDialog(){
        await this.dialog.click();
    }
    async openWindow() {
        await this.windos.click();
    }
    async closeWindow() {
        await this.windos.click();
    }
    async openPopover(){
        await this.popover.click();
    }
    async openToaster(){
        await this.toaster.click();
    }
    async openTooltip(){
        await this.tooltip.click();
    }
    async openExtraComponents(){
        await this.extraComponents.click();
    }
    async openCharts(){}


}
