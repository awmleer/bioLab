import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetailed} from "../../classes/paper";
import {PaperService} from "../../services/paper.service";
import {ToastService} from "../../services/toast.service";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Clipboard} from "@ionic-native/clipboard";

@Component({
    selector: 'page-paper-detail',
    templateUrl: 'paper-detail.html',
})
export class PaperDetailPage {
    paper:PaperDetailed;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private toastService: ToastService,
        private paperService: PaperService,
        private inAppBrowser: InAppBrowser,
        private clipboard: Clipboard
    ) {}

    ionViewWillLoad(){
        this.paperService.getPaperDetail(this.navParams.get('paperId')).then(response=>{
            this.paper=response.json();
        },err=>{
            this.toastService.toast('获取论文信息失败');
            this.navCtrl.pop();
        });
    }

    share(){
        this.clipboard.copy(`${this.paper.title} 点击链接阅读：http://118.89.186.130/paper/${this.paper.id}/preview/`);
        this.toastService.toast('分享链接已复制到剪贴板');
    }

    download(){
        this.inAppBrowser.create(`http://118.89.186.130/paper/${this.paper.id}/download/`,'_system');
    }

    read(){
        this.inAppBrowser.create(`http://118.89.186.130/paper/${this.paper.id}/preview/`,'_blank',{
            location:'no',
            zoom:'no'
        });
    }

}
