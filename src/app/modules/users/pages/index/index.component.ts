import { Component, OnInit } from '@angular/core';
import { NftAuctionsTableComponent } from '@app/modules/dashboard/components/nft/nft-auctions-table/nft-auctions-table.component';

@Component({
    selector: 'app-users-index',
    templateUrl: 'index.component.html',
    styleUrls: ['./index.component.scss'],
    imports: [NftAuctionsTableComponent],
})
export class IndexComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
