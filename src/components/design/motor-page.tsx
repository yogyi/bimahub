/* Auto-adapted from stitch design HTML */
export function DesignMotorPage() {
  return (
<div className="design-page w-full bg-surface pt-28"><div className="pt-8"><div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin space-y-space-xl">

<div className="bg-primary text-on-primary rounded-xl p-space-md shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">directions_car</span>
</div>
<div>
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-md text-label-md text-secondary-fixed">LIVE QUOTE ENGINE</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline-variant">IRDAI Real-time Underwriting</span>
</div>
<p className="font-headline-sm text-headline-sm font-bold text-on-primary mt-0.5">Hyundai Creta SX (O) 1.5 Petrol</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 text-on-primary">
<span className="bg-primary-container text-primary-fixed font-label-md text-label-md px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">calendar_today</span> Reg Year: 2022
        </span>
<span className="bg-primary-container text-primary-fixed font-label-md text-label-md px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">pin_drop</span> RTO: MH-02 (Mumbai West)
        </span>
<button className="bg-secondary-container hover:bg-secondary text-on-secondary font-label-md text-label-md px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1" id="openVehicleModal">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">tune</span> Modify Vehicle
        </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-4 flex flex-col justify-between space-y-space-md">
<div>
<label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant block mb-2">1. Coverage Architecture</label>
<div className="grid grid-cols-1 gap-2">
<button className="coverage-toggle active text-left p-3 rounded-lg bg-surface-container-high text-on-surface font-title-md text-title-md flex items-center justify-between transition-all" data-type="comprehensive">
<div>
<div className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">security</span>
                    Comprehensive Cover
                  </div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Own Damage + Mandatory 3rd Party</div>
</div>
<span className="material-symbols-outlined text-secondary text-[20px] check-icon" aria-hidden="true">check_circle</span>
</button>
<button className="coverage-toggle text-left p-3 rounded-lg bg-surface-container-low text-on-surface-variant font-title-md text-title-md flex items-center justify-between hover:bg-surface-container transition-all" data-type="zero-dep">
<div>
<div className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">shield_with_heart</span>
                    Zero Dep Standalone
                  </div>
<div className="font-body-sm text-body-sm opacity-80">100% Fiber &amp; Metal reimbursement</div>
</div>
<span className="material-symbols-outlined opacity-30 text-[20px] check-icon" aria-hidden="true">radio_button_unchecked</span>
</button>
<button className="coverage-toggle text-left p-3 rounded-lg bg-surface-container-low text-on-surface-variant font-title-md text-title-md flex items-center justify-between hover:bg-surface-container transition-all" data-type="third-party">
<div>
<div className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">gavel</span>
                    Third Party Liability Only
                  </div>
<div className="font-body-sm text-body-sm opacity-80">Statutory minimum legal requirement</div>
</div>
<span className="material-symbols-outlined opacity-30 text-[20px] check-icon" aria-hidden="true">radio_button_unchecked</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-3 rounded-lg">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant block mb-1.5">Previous Policy Claim Status</span>
<div className="flex items-center gap-2">
<button className="flex-1 py-1.5 px-3 rounded bg-secondary text-on-secondary font-label-md text-label-md text-center transition-all flex items-center justify-center gap-1" id="ncbNoBtn">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">verified</span>
                No Claim (45% NCB Applied)
              </button>
<button className="flex-1 py-1.5 px-3 rounded bg-surface-container-high text-on-surface-variant font-label-md text-label-md text-center hover:bg-surface-container transition-all" id="ncbYesBtn">
                Claim Filed (0% NCB)
              </button>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<div>
<span className="font-label-md text-label-md uppercase tracking-wide text-on-surface-variant">2. Insured Declared Value (IDV)</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">Vehicle Agreed Valuation</h4>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase">Optimal Payout</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Maximum claim payable in total loss or vehicle theft. Sovereign recommends matching manufacturer market depreciation.
            </p>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-center justify-between mb-4">
<div>
<div className="font-label-sm text-label-sm text-outline uppercase">Active Valuation</div>
<div className="font-headline-lg text-headline-lg text-secondary font-bold tracking-tight" id="idvDisplay">₹10,45,000</div>
</div>
<div className="text-right">
<div className="font-label-sm text-label-sm text-on-surface-variant">Recommended</div>
<div className="font-label-lg text-label-lg font-bold text-on-surface">₹10,45,000</div>
</div>
</div>

<div className="space-y-2">
<input className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-secondary" id="idvRange" max="1180000" min="890000" step="5000" type="range" defaultValue="1045000"/>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="">Min: ₹8,90,000</span>
<span className="text-secondary font-bold">Standard: ₹10,45,000</span>
<span className="">Max: ₹11,80,000</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">verified_user</span>
              100% Guaranteed payout in constructive loss
            </span>
<button className="text-secondary hover:underline font-label-sm text-label-sm" id="resetIdv">Reset to Default</button>
</div>
</div>

<div className="lg:col-span-3 bg-surface-container-high rounded-xl p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-primary-fixed-variant">Vehicle DNA</span>
<span className="material-symbols-outlined text-primary-container text-[20px]" aria-hidden="true">local_gas_station</span>
</div>
<div className="space-y-2 font-body-sm text-body-sm">
<div className="flex justify-between py-1 bg-surface-container-lowest/60 px-2 rounded">
<span className="text-on-surface-variant">Engine Cubic Capacity</span>
<span className="font-bold text-on-surface">1,497 cc</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-lowest/60 px-2 rounded">
<span className="text-on-surface-variant">Seating Capacity</span>
<span className="font-bold text-on-surface">5 Persons</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-lowest/60 px-2 rounded">
<span className="text-on-surface-variant">Fuel Configuration</span>
<span className="font-bold text-on-surface">BS6 Petrol</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-lowest/60 px-2 rounded">
<span className="text-on-surface-variant">Policy Expiry Date</span>
<span className="font-bold text-error">Expiring in 6 Days</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-lowest rounded-lg p-2.5 flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]" aria-hidden="true">price_check</span>
<div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Estimated Premium Delta</div>
<div className="font-label-lg text-label-lg font-bold text-primary">Saves ₹4,120 vs Dealership Quote</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-space-md gap-2">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Custom Protective Matrix</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Select High-Impact Riders &amp; Add-ons</h3>
</div>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">6 add-ons available for 2022 Hyundai Creta</span>
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold">Recommended Pack</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md" id="addonsGrid">

<label className="addon-card cursor-pointer rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between select-none relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<input checked="" className="addon-checkbox w-5 h-5 rounded accent-secondary cursor-pointer" data-addon="Zero Depreciation" type="checkbox" defaultValue="1850"/>
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Zero Depreciation</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full inline-block mt-0.5">Top Recommendation</span>
</div>
</div>
<span className="font-label-lg text-label-lg font-bold text-secondary">+₹1,850/yr</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
            100% payout on plastic, rubber, fiber glass &amp; metal parts during accidental claims without depreciation deduction.
          </p>
</label>

<label className="addon-card cursor-pointer rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between select-none relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<input checked="" className="addon-checkbox w-5 h-5 rounded accent-secondary cursor-pointer" data-addon="Engine Protection" type="checkbox" defaultValue="720"/>
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Engine &amp; Gearbox Guard</span>
<span className="text-on-surface-variant font-label-sm text-label-sm block mt-0.5">Hydrostatic Lock Protection</span>
</div>
</div>
<span className="font-label-lg text-label-lg font-bold text-secondary">+₹720/yr</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
            Covers critical internal engine damage resulting from water ingress (monsoon waterlogging) or oil leakage.
          </p>
</label>

<label className="addon-card cursor-pointer rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between select-none relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<input checked="" className="addon-checkbox w-5 h-5 rounded accent-secondary cursor-pointer" data-addon="24x7 RSA" type="checkbox" defaultValue="350"/>
<div>
<span className="font-title-md text-title-md font-bold text-primary block">24x7 Roadside Assist</span>
<span className="text-on-surface-variant font-label-sm text-label-sm block mt-0.5">Pan-India Towing &amp; RSA</span>
</div>
</div>
<span className="font-label-lg text-label-lg font-bold text-secondary">+₹350/yr</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
            Immediate flat tyre repair, emergency fuel refill, battery jumpstart, and unlimited breakdown towing to network garage.
          </p>
</label>

<label className="addon-card cursor-pointer rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between select-none relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<input className="addon-checkbox w-5 h-5 rounded accent-secondary cursor-pointer" data-addon="Return to Invoice" type="checkbox" defaultValue="990"/>
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Return to Invoice (RTI)</span>
<span className="text-on-surface-variant font-label-sm text-label-sm block mt-0.5">Original Ex-Showroom + Taxes</span>
</div>
</div>
<span className="font-label-lg text-label-lg font-bold text-secondary">+₹990/yr</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
            In total theft or complete write-off, receive 100% of the original invoice value including road tax and registration fees.
          </p>
</label>

<label className="addon-card cursor-pointer rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between select-none relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<input checked="" className="addon-checkbox w-5 h-5 rounded accent-secondary cursor-pointer" data-addon="Consumables" type="checkbox" defaultValue="450"/>
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Consumables Cover</span>
<span className="text-on-surface-variant font-label-sm text-label-sm block mt-0.5">Oils, Nuts, Coolants &amp; Gas</span>
</div>
</div>
<span className="font-label-lg text-label-lg font-bold text-secondary">+₹450/yr</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
            Reimburses non-repairable items like engine oil, gearbox fluid, AC refrigerant, washers, and nuts otherwise billed to customer.
          </p>
</label>

<label className="addon-card cursor-pointer rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between select-none relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<input className="addon-checkbox w-5 h-5 rounded accent-secondary cursor-pointer" data-addon="Tyre Rim Protection" type="checkbox" defaultValue="600"/>
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Tyre &amp; Rim Shield</span>
<span className="text-on-surface-variant font-label-sm text-label-sm block mt-0.5">Alloy &amp; Puncture Damage</span>
</div>
</div>
<span className="font-label-lg text-label-lg font-bold text-secondary">+₹600/yr</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
            Replacement expense for accidental bulging, cut, or blowouts in tyres, and repair of deformed alloy rims.
          </p>
</label>
</div>
</div>

<div className="space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Verified Institutional Quotes</span>
<h2 className="font-headline-md text-headline-md font-bold text-primary">Compare 4 Underwriters for Hyundai Creta</h2>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Sorted by:</span>
<select className="bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg px-3 py-2 outline-none shadow-sm cursor-pointer">
<option>Sovereign Value Score (Recommended)</option>
<option>Lowest Total Premium</option>
<option>Highest Claim Settlement Ratio</option>
<option>Cashless Garages in MH-02</option>
</select>
</div>
</div>

<div className="space-y-space-md">

<div className="plan-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" data-base="11240">
<div className="absolute top-0 right-0 bg-secondary text-on-secondary font-label-sm text-label-sm px-4 py-1 rounded-bl-xl font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" aria-hidden="true">star</span> Sovereign #1 Choice
          </div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-3">
<div className="flex items-center gap-3 mb-2">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-primary font-headline-sm">
                  HE
                </div>
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Example Cover</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Optima Motor Shield</span>
</div>
</div>
<div className="space-y-1 font-body-sm text-body-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Claim Settlement Ratio</span>
<span className="font-bold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded text-label-sm">98.9% CSR</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Cashless Garages</span>
<span className="font-bold text-on-surface">8,200+ Pan-India</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Mumbai West Garages</span>
<span className="font-bold text-secondary">38 Authorized</span>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-md">
<div className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant mb-2">Included Coverage Metrics</div>
<div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm mb-3">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">verified</span>
<span className="">IDV: ₹10,45,000</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">bolt</span>
<span className="">30-min Cashless Pass</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">home_repair_service</span>
<span className="">Doorstep Pick &amp; Drop</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">support_agent</span>
<span className="">Dedicated Claim Head</span>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Zero Dep included</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Engine Safe</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">24x7 RSA</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Consumables</span>
</div>
</div>

<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
<div className="text-left lg:text-right">
<span className="font-label-sm text-label-sm text-outline uppercase">Total Annual Premium (Excl. GST)</span>
<div className="plan-price font-headline-lg text-headline-lg font-bold text-primary tracking-tight">₹14,610</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">or ₹990/month on No-Cost EMI</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto lg:w-full justify-end">
<button className="flex-1 lg:flex-initial bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">compare_arrows</span> Compare
                </button>
<button className="flex-1 lg:flex-initial bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg px-6 py-2.5 rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5">
                  Buy Policy <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

<div className="plan-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" data-base="10850">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-3">
<div className="flex items-center gap-3 mb-2">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-primary font-headline-sm">
                  IL
                </div>
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Example Shield</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Complete Motor Guard</span>
</div>
</div>
<div className="space-y-1 font-body-sm text-body-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Claim Settlement Ratio</span>
<span className="font-bold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded text-label-sm">99.1% CSR</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Cashless Garages</span>
<span className="font-bold text-on-surface">7,800+ Pan-India</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Mumbai West Garages</span>
<span className="font-bold text-secondary">34 Authorized</span>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-md">
<div className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant mb-2">Included Coverage Metrics</div>
<div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm mb-3">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">videocam</span>
<span className="">15-min Live Video Inspection</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">verified</span>
<span className="">IDV: ₹10,45,000</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">verified_user</span>
<span className="">Instant Spot Settlement</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">car_rental</span>
<span className="">Courtesy Car Benefit</span>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Zero Dep included</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Hydrostatic Lock</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Key Replacement</span>
</div>
</div>

<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
<div className="text-left lg:text-right">
<span className="font-label-sm text-label-sm text-outline uppercase">Total Annual Premium (Excl. GST)</span>
<div className="plan-price font-headline-lg text-headline-lg font-bold text-primary tracking-tight">₹14,220</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">or ₹955/month on No-Cost EMI</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto lg:w-full justify-end">
<button className="flex-1 lg:flex-initial bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">compare_arrows</span> Compare
                </button>
<button className="flex-1 lg:flex-initial bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg px-6 py-2.5 rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5">
                  Buy Policy <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

<div className="plan-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" data-base="10490">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-3">
<div className="flex items-center gap-3 mb-2">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-primary font-headline-sm">
                  TA
                </div>
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Example Care</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto Secure Comprehensive</span>
</div>
</div>
<div className="space-y-1 font-body-sm text-body-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Claim Settlement Ratio</span>
<span className="font-bold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded text-label-sm">99.0% CSR</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Cashless Garages</span>
<span className="font-bold text-on-surface">6,900+ Pan-India</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Mumbai West Garages</span>
<span className="font-bold text-secondary">31 Authorized</span>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-md">
<div className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant mb-2">Included Coverage Metrics</div>
<div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm mb-3">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">military_tech</span>
<span className="">13 Modular Add-ons Compatible</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">verified</span>
<span className="">IDV: ₹10,45,000</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">lock_reset</span>
<span className="">Loss of Personal Belongings</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">handyman</span>
<span className="">Warranty Safeguard</span>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Zero Dep included</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Glass Fiber Cover</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Towing ₹2,500</span>
</div>
</div>

<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
<div className="text-left lg:text-right">
<span className="font-label-sm text-label-sm text-outline uppercase">Total Annual Premium (Excl. GST)</span>
<div className="plan-price font-headline-lg text-headline-lg font-bold text-primary tracking-tight">₹13,860</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">or ₹920/month on No-Cost EMI</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto lg:w-full justify-end">
<button className="flex-1 lg:flex-initial bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">compare_arrows</span> Compare
                </button>
<button className="flex-1 lg:flex-initial bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg px-6 py-2.5 rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5">
                  Buy Policy <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

<div className="plan-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" data-base="9980">
<div className="absolute top-0 right-0 bg-primary-container text-primary-fixed font-label-sm text-label-sm px-4 py-1 rounded-bl-xl font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" aria-hidden="true">price_change</span> Economical Value
          </div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-3">
<div className="flex items-center gap-3 mb-2">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-primary font-headline-sm">
                  BA
                </div>
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Example Motor</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Drive Assure 24/7</span>
</div>
</div>
<div className="space-y-1 font-body-sm text-body-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Claim Settlement Ratio</span>
<span className="font-bold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded text-label-sm">98.5% CSR</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Cashless Garages</span>
<span className="font-bold text-on-surface">7,100+ Pan-India</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="">Mumbai West Garages</span>
<span className="font-bold text-secondary">30 Authorized</span>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-md">
<div className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant mb-2">Included Coverage Metrics</div>
<div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm mb-3">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">payments</span>
<span className="">Instant Spot Settlement to ₹30,000</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">verified</span>
<span className="">IDV: ₹10,45,000</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">tire_repair</span>
<span className="">Tyre &amp; Alloy Support</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]" aria-hidden="true">speed</span>
<span className="">Motor On-The-Move App App</span>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Zero Dep included</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Engine Protect</span>
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded">24/7 Breakdown</span>
</div>
</div>

<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
<div className="text-left lg:text-right">
<span className="font-label-sm text-label-sm text-outline uppercase">Total Annual Premium (Excl. GST)</span>
<div className="plan-price font-headline-lg text-headline-lg font-bold text-primary tracking-tight">₹13,350</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">or ₹875/month on No-Cost EMI</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto lg:w-full justify-end">
<button className="flex-1 lg:flex-initial bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">compare_arrows</span> Compare
                </button>
<button className="flex-1 lg:flex-initial bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg px-6 py-2.5 rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5">
                  Buy Policy <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-md relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md max-w-3xl">
<div className="w-14 h-14 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[32px]" aria-hidden="true">verified_user</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-tertiary-fixed uppercase tracking-wider font-bold">The Sovereign Promise</span>
<span className="bg-primary-container text-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded">Physical On-Site Support</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-primary mb-1">45-Minute On-Spot Physical Claim Manager Guarantee</h3>
<p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              If an accident occurs anywhere in major municipal limits, an authorized Sovereign surveyor joins you directly at the authorized network workshop within 45 minutes. We execute the claim documentation, estimate audit, and digital approvals on your behalf. Zero physical paperwork burden.
            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-auto shrink-0">
<div className="bg-primary-container rounded-lg p-3 text-left">
<div className="font-label-sm text-label-sm text-outline-variant">Emergency SOS Dispatch</div>
<div className="font-title-md text-title-md text-on-primary font-bold">1800-208-8777 (Press 1)</div>
</div>
<button className="bg-surface-container-lowest text-primary hover:bg-surface font-label-md text-label-md py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-1 font-bold">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">download</span> Download Claim Protocol PDF
          </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-space-md gap-4">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Workshop Infrastructure</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Authorized Cashless Garages Near You</h3>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="flex items-center bg-surface-container-low rounded-lg px-3 py-1.5">
<span className="material-symbols-outlined text-outline text-[18px] mr-1.5" aria-hidden="true">location_on</span>
<input className="bg-transparent text-body-sm font-body-sm font-bold text-on-surface focus:outline-none w-48" type="text" defaultValue="Mumbai West - 400053"/>
</div>
<button className="bg-secondary text-on-secondary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
            Search Garages
          </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7">
<div className="w-full h-80 rounded-xl bg-surface-container-high relative overflow-hidden flex flex-col justify-between p-space-md" data-location="Andheri West, Mumbai, India" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5Ggi0XOTawaaB334q-klHf6ni7mpXAct-OyLwTKwgdlM2n5tO3_eC1K38bvy8nFubvQIftdgVXc8JpajpY6WUQC7UTjbgjh9GZqKC2z5Uz_mBi2B1hgvStVQ5njReDYocxiiT-yFkQEtdBVGjTiXb9nL2xeKZ3rWjbg6eelUVaEY2Jfv5VAh3HQDHuK8wkvMmfsTtU0lEDayuLjHFSKnBp1x0ubJNxC0_xZjP10-PDsKX3FmSGChQzg')" }}>
<div className="bg-surface/90 backdrop-blur-md rounded-lg p-2.5 shadow-sm max-w-xs self-start">
<div className="font-label-md text-label-md font-bold text-primary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                42 Cashless Garages Detected
              </div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Within 8 km radius of Andheri &amp; Oshiwara</div>
</div>
<div className="bg-surface/90 backdrop-blur-md rounded-lg p-2 shadow-sm self-end font-label-sm text-label-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">navigation</span>
<span className="">GPS Precision Active</span>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-3">
<div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Advaith Hyundai Workshop</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Plot 12, Link Road, Andheri West</span>
</div>
<span className="bg-surface-container-highest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">1.2 km</span>
</div>
<div className="flex items-center gap-4 mt-2 font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-on-tertiary-container"><span className="material-symbols-outlined text-[14px]" aria-hidden="true">check</span> Hyundai OEM Certified</span>
<span className="">★ 4.8 (820 reviews)</span>
</div>
</div>
<div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Shreenath Motors Multi-Brand Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Laxmi Industrial Estate, Andheri West</span>
</div>
<span className="bg-surface-container-highest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">2.4 km</span>
</div>
<div className="flex items-center gap-4 mt-2 font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-on-tertiary-container"><span className="material-symbols-outlined text-[14px]" aria-hidden="true">check</span> Paint Booth &amp; Laser Jig</span>
<span className="">★ 4.7 (540 reviews)</span>
</div>
</div>
<div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div>
<span className="font-title-md text-title-md font-bold text-primary block">Trident Automotive Center</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SV Road, Goregaon West</span>
</div>
<span className="bg-surface-container-highest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">3.8 km</span>
</div>
<div className="flex items-center gap-4 mt-2 font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-on-tertiary-container"><span className="material-symbols-outlined text-[14px]" aria-hidden="true">check</span> 24h Express Delivery</span>
<span className="">★ 4.6 (390 reviews)</span>
</div>
</div>
<button className="w-full py-2.5 text-center font-label-md text-label-md text-secondary hover:text-primary transition-colors bg-surface-container-high rounded-xl">
            View All 42 Cashless Centers in Mumbai West →
          </button>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md shadow-xl py-3 px-margin-mobile md:px-margin mt-space-lg">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-space-md">
<div className="flex items-center gap-3">
<div className="hidden sm:flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Active Selection</span>
<span className="font-title-md text-title-md font-bold text-primary">Example Cover Optima Motor</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Estimated Annual Outflow</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-primary" id="stickyTotalDisplay">₹14,610</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">+ GST (18%)</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex bg-surface-container text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg hover:bg-surface-container-high transition-colors">
          Download PDF Quotation
        </button>
<button className="bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg px-6 py-2.5 rounded-lg transition-all shadow-md flex items-center gap-2 font-bold">
          Proceed to Purchase <span className="material-symbols-outlined text-[18px]" aria-hidden="true">lock</span>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm hidden items-center justify-center p-4" id="vehicleModal">
<div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl relative animate-fade-in">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase text-secondary">Vehicle Registry Lookup</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Update Vehicle Particulars</h3>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center" id="closeVehicleModal">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1">Registration Number / VAHAN ID</label>
<input className="w-full bg-surface-container-low text-on-surface font-title-md text-title-md p-3 rounded-lg focus:outline-none focus:bg-surface-container uppercase font-bold" type="text" defaultValue="MH-02-DW-7821"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Make &amp; Model</label>
<select className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm p-3 rounded-lg focus:outline-none">
<option selected="">Hyundai Creta</option>
<option>Kia Seltos</option>
<option>Maruti Grand Vitara</option>
<option>Tata Harrier</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Fuel &amp; Transmission</label>
<select className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm p-3 rounded-lg focus:outline-none">
<option selected="">1.5 Petrol (Manual)</option>
<option>1.5 Petrol (IVT / Auto)</option>
<option>1.5 Diesel (Manual)</option>
<option>1.5 Diesel (Automatic)</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Year of Purchase</label>
<select className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm p-3 rounded-lg focus:outline-none">
<option>2024</option>
<option>2023</option>
<option selected="">2022</option>
<option>2021</option>
<option>2020</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Registered City / RTO</label>
<input className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm p-3 rounded-lg focus:outline-none" type="text" defaultValue="Mumbai West (MH-02)"/>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg py-3 rounded-lg transition-colors font-bold shadow-md" id="saveVehicleDetails">
            Fetch Fresh Underwriting Quotes
          </button>
</div>
</div>
</div>
</div>


</div></div></div>
  );
}
