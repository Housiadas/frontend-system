import { Component, OnInit } from '@angular/core';
import { NftAuctionsTableComponent } from '@app/modules/dashboard/components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '@app/modules/dashboard/components/nft/nft-chart-card/nft-chart-card.component';
import { NftDualCardComponent } from '@app/modules/dashboard/components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '@app/modules/dashboard/components/nft/nft-header/nft-header.component';
import { NftSingleCardComponent } from '@app/modules/dashboard/components/nft/nft-single-card/nft-single-card.component';

@Component({
    selector: 'app-users-index',
    templateUrl: 'index.component.html',
    styleUrls: ['./index.component.scss'],
    imports: [
        NftAuctionsTableComponent,
        NftChartCardComponent,
        NftDualCardComponent,
        NftHeaderComponent,
        NftSingleCardComponent,
    ],
    standalone: true,
})
export class IndexComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
