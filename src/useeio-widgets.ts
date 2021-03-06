import { FilterWidget } from "./widgets/filter";
import { UrlConfigTransmitter } from "./widget";
import { ImpactHeatmap, HeatmapConfig } from "./widgets/impact-heatmap";
import { ImpactChart, ImpactChartConfig } from "./widgets/impact-chart";
import { SectorList, SectorListConfig } from "./widgets/sector-list";
import { SettingsWidget, SettingsWidgetConfig } from "./widgets/settings";
import { WebApiConfig, Model } from "./webapi";
import { ProfileChart, ProfileChartConfig } from "./charts/profile-chart";

export function model(conf: WebApiConfig): Model {
    return new Model(conf);
}

export function filterWidget(conf: { selector: string }): FilterWidget {
    return new FilterWidget(conf.selector);
}

export function urlConfig() {
    return new UrlConfigTransmitter();
}

export function impactChart(config: ImpactChartConfig): ImpactChart {
    const chart = new ImpactChart();
    chart.init(config);
    return chart;
}

export function impactHeatmap(config: HeatmapConfig): ImpactHeatmap {
    const heatmap = new ImpactHeatmap();
    heatmap.init(config);
    return heatmap;
}

export function sectorList(config: SectorListConfig): SectorList {
    const s = new SectorList(config);
    s.init();
    return s;
}

export function settingsWidget(config: SettingsWidgetConfig): SettingsWidget {
    const widget = new SettingsWidget(config);
    widget.init();
    return widget;
}

export function profileChart(config: ProfileChartConfig): ProfileChart {
    const widget = new ProfileChart(config);
    return widget;
}