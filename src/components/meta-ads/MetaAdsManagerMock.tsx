import {
  formatInr,
  formatInteger,
  metaAdsCampaigns,
  metaAdsTotals,
} from "../../data/metaAdsCampaigns"
import {
  IconAccountOverview,
  IconAdSetsTab,
  IconAdsTab,
  IconBreakdown,
  IconCalendar,
  IconCampaignsTab,
  IconChart,
  IconChevronDown,
  IconColumns,
  IconCreate,
  IconDuplicate,
  IconEdit,
  IconExpand,
  IconFlask,
  IconNavAdsReporting,
  IconNavAudiences,
  IconNavBilling,
  IconNavCampaigns,
  IconNavSettings,
  IconReports,
  IconSearch,
  IconSort,
  MetaLogoMark,
} from "./MetaIcons"
import "./meta-ads-manager.css"

type MetaAdsManagerMockProps = {
  showBrowserChrome?: boolean
  className?: string
}

export function MetaAdsManagerMock({
  showBrowserChrome = true,
  className = "",
}: MetaAdsManagerMockProps) {
  return (
    <div className={`meta-ads-root ${className}`}>
      <div className="meta-ads-frame">
        {showBrowserChrome ? (
          <div className="meta-ads-chrome" aria-hidden>
            <span className="meta-ads-chrome-dot" style={{ background: "#ff5f57" }} />
            <span className="meta-ads-chrome-dot" style={{ background: "#febc2e" }} />
            <span className="meta-ads-chrome-dot" style={{ background: "#28c840" }} />
            <div className="meta-ads-chrome-url">
              adsmanager.facebook.com/adsmanager/manage/campaigns?act=128947562301884
            </div>
          </div>
        ) : null}

        <div className="meta-ads-shell">
          <nav className="meta-ads-nav" aria-label="Ads Manager navigation">
            <div className="meta-ads-nav-item" title="Meta">
              <MetaLogoMark />
            </div>
            <div className="meta-ads-nav-item is-active" title="Campaigns">
              <IconNavCampaigns />
            </div>
            <div className="meta-ads-nav-item" title="Ads reporting">
              <IconNavAdsReporting />
            </div>
            <div className="meta-ads-nav-item" title="Audiences">
              <IconNavAudiences />
            </div>
            <div className="meta-ads-nav-item" title="Billing">
              <IconNavBilling />
            </div>
            <div className="meta-ads-nav-item" style={{ marginTop: "auto" }} title="Settings">
              <IconNavSettings />
            </div>
          </nav>

          <div className="meta-ads-main">
            <header className="meta-ads-topbar">
              <div className="meta-ads-topbar-left">
                <div className="meta-ads-account">
                  Jewel India
                  <span className="meta-ads-account-id">(128947562301884)</span>
                  <IconChevronDown />
                </div>
                <label className="meta-ads-search">
                  <IconSearch />
                  <input type="text" readOnly value="Search to filter by name, ID or metrics" />
                </label>
              </div>
              <div className="meta-ads-date">
                <IconCalendar />
                15 Sep 2025 – 21 Sep 2025
                <IconChevronDown />
              </div>
            </header>

            <div className="meta-ads-tabs-wrap">
              <div className="meta-ads-tabs" role="tablist">
                <div className="meta-ads-tab" role="tab" aria-selected={false}>
                  <IconAccountOverview />
                  Account overview
                </div>
                <div className="meta-ads-tab is-active" role="tab" aria-selected>
                  <IconCampaignsTab />
                  Campaigns
                </div>
                <div className="meta-ads-tab" role="tab" aria-selected={false}>
                  <IconAdSetsTab />
                  Ad sets
                </div>
                <div className="meta-ads-tab" role="tab" aria-selected={false}>
                  <IconAdsTab />
                  Ads
                </div>
              </div>
            </div>

            <div className="meta-ads-toolbar">
              <div className="meta-ads-toolbar-left">
                <button type="button" className="meta-ads-btn meta-ads-btn--create">
                  <IconCreate />
                  Create
                </button>
                <button type="button" className="meta-ads-btn">
                  <IconDuplicate />
                  Duplicate
                </button>
                <button type="button" className="meta-ads-btn">
                  <IconEdit />
                  Edit
                </button>
                <button type="button" className="meta-ads-btn">
                  <IconChart />
                  Analyse
                </button>
                <button type="button" className="meta-ads-btn">
                  <IconFlask />
                  A/B test
                </button>
                <button type="button" className="meta-ads-btn meta-ads-btn--menu">
                  More
                  <IconChevronDown />
                </button>
              </div>
              <div className="meta-ads-toolbar-right">
                <button type="button" className="meta-ads-btn">
                  <IconColumns />
                  Columns: Custom · JW
                  <IconChevronDown />
                </button>
                <button type="button" className="meta-ads-btn">
                  <IconBreakdown />
                  Breakdown
                  <IconChevronDown />
                </button>
                <button type="button" className="meta-ads-btn meta-ads-btn--ghost" aria-label="Reports">
                  <IconReports />
                </button>
                <button type="button" className="meta-ads-btn meta-ads-btn--ghost" aria-label="Expand">
                  <IconExpand />
                </button>
              </div>
            </div>

            <div className="meta-ads-table-wrap">
              <table className="meta-ads-table">
                <thead>
                  <tr>
                    <th className="meta-ads-col-check">
                      <span className="meta-ads-checkbox" />
                    </th>
                    <th className="meta-ads-col-toggle">
                      <span className="th-inner">
                        Off / On
                        <IconSort />
                      </span>
                    </th>
                    <th className="meta-ads-col-campaign">
                      <span className="th-inner">
                        Campaign
                        <IconSort />
                      </span>
                    </th>
                    <th>
                      <span className="th-inner">
                        Budget
                        <IconSort />
                      </span>
                    </th>
                    <th>
                      <span className="th-inner">
                        Results
                        <IconSort />
                      </span>
                    </th>
                    <th className="meta-ads-text-right">
                      <span className="th-inner">
                        Reach
                        <IconSort />
                      </span>
                    </th>
                    <th className="meta-ads-text-right">
                      <span className="th-inner">
                        Impressions
                        <IconSort />
                      </span>
                    </th>
                    <th className="meta-ads-text-right">
                      <span className="th-inner">
                        Cost per result
                        <IconSort />
                      </span>
                    </th>
                    <th className="meta-ads-text-right">
                      <span className="th-inner">
                        Amount spent
                        <IconSort />
                      </span>
                    </th>
                    <th>
                      <span className="th-inner">
                        Ends
                        <IconSort />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {metaAdsCampaigns.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <span className="meta-ads-checkbox" />
                      </td>
                      <td>
                        <span
                          className={`meta-ads-toggle${row.on ? " is-on" : ""}`}
                          role="presentation"
                        />
                      </td>
                      <td>
                        <span className="meta-ads-link">{row.name}</span>
                      </td>
                      <td>
                        <div className="meta-ads-metric-primary">{formatInr(row.budgetDaily)}</div>
                        <div className="meta-ads-metric-secondary">Daily</div>
                      </td>
                      <td>
                        <div className="meta-ads-metric-primary">{formatInteger(row.results)}</div>
                        <div className="meta-ads-metric-secondary">Purchases</div>
                      </td>
                      <td className="meta-ads-text-right">
                        <div className="meta-ads-metric-primary">{formatInteger(row.reach)}</div>
                      </td>
                      <td className="meta-ads-text-right">
                        <div className="meta-ads-metric-primary">
                          {formatInteger(row.impressions)}
                        </div>
                      </td>
                      <td className="meta-ads-text-right">
                        <div className="meta-ads-metric-primary">
                          {formatInr(row.costPerResult)}
                        </div>
                        <div className="meta-ads-metric-secondary">Per Purchase</div>
                      </td>
                      <td className="meta-ads-text-right">
                        <div className="meta-ads-metric-primary">{formatInr(row.amountSpent)}</div>
                      </td>
                      <td>
                        <div className="meta-ads-metric-primary">Ongoing</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    <td />
                    <td>
                      <span className="meta-ads-metric-secondary">Results from 6 campaigns</span>
                    </td>
                    <td />
                    <td>
                      <div className="meta-ads-metric-primary">
                        {formatInteger(metaAdsTotals.results)}
                      </div>
                      <div className="meta-ads-metric-secondary">Purchases</div>
                    </td>
                    <td className="meta-ads-text-right">
                      <div className="meta-ads-metric-primary">
                        {formatInteger(metaAdsTotals.reach)}
                      </div>
                      <div className="meta-ads-metric-secondary">People</div>
                    </td>
                    <td className="meta-ads-text-right">
                      <div className="meta-ads-metric-primary">
                        {formatInteger(metaAdsTotals.impressions)}
                      </div>
                    </td>
                    <td />
                    <td className="meta-ads-text-right">
                      <div className="meta-ads-metric-primary">
                        {formatInr(metaAdsTotals.amountSpent)}
                      </div>
                    </td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
