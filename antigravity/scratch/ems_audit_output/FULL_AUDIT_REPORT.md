# CF Smart EMS — Complete Platform Audit Report

**Generated:** 2026-06-09 19:57:02
**Platform:** https://www.cfsmartems.com
**Total Sections Documented:** 51

---


# DASHBOARD: Super Admin

---

## MODULE: Dashboard Home

**URL:** `https://www.cfsmartems.com/Device/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0002_super_admin_dashboard_home.png`

### Sidebar Navigation Items
- **appadmin@yopmail.com** -> `#`
- **My
                                        Profile** -> `/Account/Profile`
- **Change Password** -> `/Account/ChangePassword`
- **Sign Out** -> `/Account/Logout`
- **Organizations** -> `/Organization/Index`
- **Users** -> `/User/Index`
- **Manage Gateway** -> `/Gateway/Index`
- **Devices List** -> `/Device/Index`
- **Devices List** -> `/Device/Index`
- **Devices Template** -> `/DeviceTemplate/Index`
- **Manage Icons** -> `/ManageIcons/Index`
- **Manage Products** -> `/ManageProducts/Index`
- **Manage Data** -> `/Data/Index`
- **Variable Alarm Record** -> `/Data/VariableAlarmHistory`
- **Linkage Record** -> `/Data/LinkageRecord`
- **Historical Data** -> `/Data/History`
- **Alarm Linkage** -> `javascript:;`
- **Template Triggers** -> `/AlarmLinkage/TemplateTriggers`
- **Alarm Settings** -> `/AlarmLinkage/AlarmSettings`
- **Alarm Contacts** -> `/AlarmLinkage/Contacts`
- **Device Timestamps** -> `/DeviceTimestamps/index`
- **Manage Schedule Task** -> `/ScheduleTask/index`
- **Manage Theme Settings** -> `/ThemeSettings/index`
- **Manage Settings** -> `/ManageSettings/index`
- **Manage List** -> `/Setting/List`
- **Manage List** -> `/Setting/List`

### ELEMENTS
- **[button]** Add Device
- **[button]** Batch Delete
- **[button]** Export
- **[button]** Query
- **[button]** Excel
- **[heading]** Manage Devices
Manage Devices
List
- **[heading]** Manage Devices
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Offline
- **[badge/status]** OFF
- **[badge/status]** Online

### TABLE COLUMNS
- Device Status
- Device Name
- Organization
- Gateway
- Device Template
- Switch
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **** [select] — Options: All Users
- **** [select] — Options: All status, Online, Offline, Alarm, Not Configured
- **Please input device name** [text] — placeholder: Please input device name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]

### PAGINATION
- Showing 1 to 10 of 13 records

---

## MODULE: My
                                        Profile

**URL:** `https://www.cfsmartems.com/Account/Profile`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0003_super_admin_my_________________________________________profi.png`

### ELEMENTS
- **[button]** Update
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[card/widget]** Full Name
Email
Phone Number
- **[heading]** Edit Profile
- **[badge/status]** 0
- **[badge/status]** Admin

### FORMS / INPUT FIELDS
- **FullName** [text]
- **Email** [text]
- **PhoneNumber** [text]

---

## MODULE: Change Password

**URL:** `https://www.cfsmartems.com/Account/ChangePassword`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0004_super_admin_change_password.png`

### ELEMENTS
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Change Password
- **[badge/status]** 0
- **[badge/status]** Admin

### FORMS / INPUT FIELDS
- **CurrentPassword** [password] — placeholder: Current Password
- **NewPassword** [password] — placeholder: New Password
- **ConfirmPassword** [password] — placeholder: Repeat Password

---

## MODULE: Organizations

**URL:** `https://www.cfsmartems.com/Organization/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0005_super_admin_organizations.png`

### ELEMENTS
- **[button]** Add Organization
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Organizations
Manage Organizations
List
- **[heading]** Manage Organizations
- **[heading]** Organization
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Organization Name
- Organization Description
- Creation Time
- Status
- Operation

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 10 of 10 records

---

## MODULE: Organizations > Add Organization Form

**URL:** `https://www.cfsmartems.com/Organization/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0006_super_admin_organizations___add_organization_form.png`

### ELEMENTS
- **[button]** Add Organization
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Organizations
Manage Organizations
List
- **[heading]** Manage Organizations
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Organization Name
- Organization Description
- Creation Time
- Status
- Operation

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **Name** [text]
- **Status** [select] — Options: Select Status, Active, Inactive
- **Description** [text]

### PAGINATION
- Showing 1 to 10 of 10 records

### NOTES
- Opened via button: Add Organization

---

## MODULE: Users

**URL:** `https://www.cfsmartems.com/User/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0007_super_admin_users.png`

### ELEMENTS
- **[button]** Add User
- **[button]** Query
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Users
Manage Users
List
- **[heading]** Manage Users
- **[heading]** Add  User
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Inactive
- **[badge/status]** Deleted
- **[badge/status]** Active

### TABLE COLUMNS
- Organization
- Full Name
- Email
- Phone Number
- Role
- Status
- Creation Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **** [select] — Options: All, Active, Inactive, Deleted
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 10 of 96 records

---

## MODULE: Users > Add User Form

**URL:** `https://www.cfsmartems.com/User/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0008_super_admin_users___add_user_form.png`

### ELEMENTS
- **[button]** Add User
- **[button]** Query
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Users
Manage Users
List
- **[heading]** Manage Users
- **[heading]** Chart Configuration
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Inactive
- **[badge/status]** Deleted
- **[badge/status]** Active

### TABLE COLUMNS
- Organization
- Full Name
- Email
- Phone Number
- Role
- Status
- Creation Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **** [select] — Options: All, Active, Inactive, Deleted
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **Name** [text]
- **Email** [email]
- **PhoneNumber** [text]
- **Address** [text]
- **Type** [select] — Options: Select Type, Residential, Commercial
- **Role** [select] — Options: Select Role, Customer, Admin
- **OrganizationId** [select] — Options: Select Organization, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **ThemeSettingId** [select] — Options: Select Theme Setting, Default, Midnight Slate Pro, Midnight Slate, Dark, Light, Night mode, CF, CF 2
- **PaymentMethod** [select] — Options: Select Payment, Cheque, Jazz Cash, Easy Paisa, Other
- **OtherPaymentMethod** [text]
- **ChartIntervalMinutes** [number]
- **Status** [checkbox]

### PAGINATION
- Showing 1 to 10 of 96 records

### NOTES
- Opened via button: Add User

---

## MODULE: Manage Gateway

**URL:** `https://www.cfsmartems.com/Gateway/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0009_super_admin_manage_gateway.png`

### ELEMENTS
- **[button]** Add Gateway
- **[button]** Batch Delete
- **[button]** Query
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Gateways
Manage Gateways
List
- **[heading]** Manage Gateways
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Offline
- **[badge/status]** Online

### TABLE COLUMNS
- Gateway Status
- Gateway Name
- Serial Number
- Gateway Model
- No Of Associated Devices
- Organization
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **** [select] — Options: All status, Online, Offline, Upgrading, In the configration, Gateway alarm, Disabled
- **** [select] — Options: All Models, Unknown type
- **Please Enter SN or gateway name** [text] — placeholder: Please Enter SN or gateway name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]
- **** [checkbox]

### PAGINATION
- Showing 1 to 10 of 13 records

---

## MODULE: Manage Gateway > Add Gateway Form

**URL:** `https://www.cfsmartems.com/Gateway/Add`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0010_super_admin_manage_gateway___add_gateway_form.png`

### NOTES
- Opened via button: Add Gateway

---

## MODULE: Devices Template

**URL:** `https://www.cfsmartems.com/DeviceTemplate/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0011_super_admin_devices_template.png`

### ELEMENTS
- **[button]** Add Template
- **[button]** Batch Delete
- **[button]** Query
- **[button]** S
- **[button]** Close
- **[button]** Submit
- **[heading]** Manage Device Templates
Manage Device Templates
List
- **[heading]** Manage Device Templates
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Template Name
- Organization
- Total No Of Variables
- NO Of Associated Devices
- Acquisition Methods
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **Please input template name** [text] — placeholder: Please input template name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 10 of 19 records

---

## MODULE: Devices Template > Add Template Form

**URL:** `https://www.cfsmartems.com/DeviceTemplate/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0012_super_admin_devices_template___add_template_form.png`

### ELEMENTS
- **[button]** Add Template
- **[button]** Batch Delete
- **[button]** Query
- **[button]** S
- **[button]** Close
- **[button]** Submit
- **[heading]** Manage Device Templates
Manage Device Templates
List
- **[heading]** Manage Device Templates
- **[heading]** Add Add Template
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Template Name
- Organization
- Total No Of Variables
- NO Of Associated Devices
- Acquisition Methods
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **Please input template name** [text] — placeholder: Please input template name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **Name** [text]
- **OrganizationId** [select] — Options: Select Organization, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **AcquisitionMethods** [radio]
- **AcquisitionMethods** [radio]

### PAGINATION
- Showing 1 to 10 of 19 records

### NOTES
- Opened via button: Add Template

---

## MODULE: Manage Icons

**URL:** `https://www.cfsmartems.com/ManageIcons/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0013_super_admin_manage_icons.png`

### ELEMENTS
- **[button]** Add Icon
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Icons
Manage Icons
List
- **[heading]** Manage Icons
- **[heading]** Icon
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Name
- Icon
- Active
- Action

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 10 of 13 records

---

## MODULE: Manage Icons > Add Icon Form

**URL:** `https://www.cfsmartems.com/ManageIcons/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0014_super_admin_manage_icons___add_icon_form.png`

### ELEMENTS
- **[button]** Add Icon
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Icons
Manage Icons
List
- **[heading]** Manage Icons
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Name
- Icon
- Active
- Action

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **IconName** [text]
- **Status** [select] — Options: Select Status, Active, Inactive
- **IconFile** [file]

### PAGINATION
- Showing 1 to 10 of 13 records

### NOTES
- Opened via button: Add Icon

---

## MODULE: Manage Products

**URL:** `https://www.cfsmartems.com/ManageProducts/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0015_super_admin_manage_products.png`

### ELEMENTS
- **[button]** Add Product
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Products
Manage Products
List
- **[heading]** Manage Products
- **[heading]** Product
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Product Name
- Price
- Product Image
- Description
- Status
- Action

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 2 of 2 records

---

## MODULE: Manage Products > Add Product Form

**URL:** `https://www.cfsmartems.com/ManageProducts/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0016_super_admin_manage_products___add_product_form.png`

### ELEMENTS
- **[button]** Add Product
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Products
Manage Products
List
- **[heading]** Manage Products
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Product Name
- Price
- Product Image
- Description
- Status
- Action

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **ProductName** [text]
- **Price** [number]
- **Description** [text]
- **ProductFile** [file]
- **Status** [select] — Options: Select Status, Active, Inactive

### PAGINATION
- Showing 1 to 2 of 2 records

### NOTES
- Opened via button: Add Product

---

## MODULE: Manage Data

**URL:** `https://www.cfsmartems.com/Data/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0017_super_admin_manage_data.png`

### ELEMENTS
- **[card/widget]** Oops!

Not Found

Please contact with system admin for details
- **[heading]** Oops!
- **[badge/status]** 0
- **[badge/status]** Admin

---

## MODULE: Variable Alarm Record

**URL:** `https://www.cfsmartems.com/Data/VariableAlarmHistory`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0018_super_admin_variable_alarm_record.png`

### ELEMENTS
- **[button]** Download Data
- **[button]** Batch Delete
- **[button]** Query
- **[button]** Excel
- **[button]** Close
- **[button]** Save
- **[button]** Cancel
- **[button]** Apply
- **[heading]** Data Center
Data Center
Variable Alarm Record
- **[heading]** Data Center
- **[heading]** Process Alarms
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Device Name
- Trigger Name
- Trigger Type
- Slave Name
- Variable
- Current Value
- Triggering Condition
- Alarm Time
- Alarm State
- Process State
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: Imran's House, Fico, EMS PANEL, CF BAG, CF SMART TECHNOLOGIES, PV GENSET SYNC, Gulshan-e-Zia, FICO EV, C Power, Supra Steel Furnaces
- **** [select] — Options: Please Select, Import Power, Export Power
- **** [select] — Options: Please Select, Voltage A (40097), Voltage B (40099), Voltage C (40101), Current A (40109), Current B (40111), Current C (40113), Active Power (40121), Reactive Power (40129), Apparent Power (40137)
- **** [select] — Options: All, Normal, Alarm
- **** [select] — Options: All, Unhandled, Misinformation, Processed
- **Pick date range** [text] — placeholder: Pick date range
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **** [checkbox]
- **ProcessAlarm** [radio]
- **ProcessAlarm** [radio]
- **result** [text]

### PAGINATION
- Showing no records

---

## MODULE: Linkage Record

**URL:** `https://www.cfsmartems.com/Data/LinkageRecord`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0019_super_admin_linkage_record.png`

### ELEMENTS
- **[button]** Download Data
- **[button]** Batch Delete
- **[button]** Query
- **[button]** Excel
- **[button]** Cancel
- **[button]** Apply
- **[heading]** Data Center
Data Center
Linkage Record
- **[heading]** Data Center
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Device Name
- Trigger Name
- Trigger Type
- Slave Name
- Variable Name
- Triggering Condition
- Trigger Device
- Linkage Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: Imran's House, Fico, EMS PANEL, CF BAG, CF SMART TECHNOLOGIES, PV GENSET SYNC, Gulshan-e-Zia, FICO EV, C Power, Supra Steel Furnaces
- **** [select] — Options: Please Select, Import Power, Export Power
- **** [select] — Options: Please Select, Voltage A (40097), Voltage B (40099), Voltage C (40101), Current A (40109), Current B (40111), Current C (40113), Active Power (40121), Reactive Power (40129), Apparent Power (40137)
- **Pick date range** [text] — placeholder: Pick date range
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **** [checkbox]

### PAGINATION
- Showing no records

---

## MODULE: Historical Data

**URL:** `https://www.cfsmartems.com/Data/History`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0020_super_admin_historical_data.png`

### ELEMENTS
- **[button]** Download Data
- **[button]** Delete Data
- **[button]** Cancel
- **[button]** Apply
- **[heading]** Data Center
Data Center
Historical Data
- **[heading]** Data Center
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Variable Name
- Display Value
- Received Time

### FORMS / INPUT FIELDS
- **** [select] — Options: Imran's House, Fico, EMS PANEL, CF BAG, CF SMART TECHNOLOGIES, PV GENSET SYNC, Gulshan-e-Zia, FICO EV, C Power, Supra Steel Furnaces
- **Pick date range** [text] — placeholder: Pick date range
- **** [select] — Options: Please Select, Import Power, Export Power
- **** [select] — Options: All, Voltage A (40097), Voltage B (40099), Voltage C (40101), Current A (40109), Current B (40111), Current C (40113), Active Power (40121), Reactive Power (40129), Apparent Power (40137)
- **** [search]
- **** [checkbox]

---

## MODULE: Template Triggers

**URL:** `https://www.cfsmartems.com/AlarmLinkage/TemplateTriggers`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0021_super_admin_template_triggers.png`

### ELEMENTS
- **[button]** Add
- **[button]** Query
- **[button]** Close
- **[button]** Save
- **[heading]** Alarm linkage
Template Trigger
Template Trigger List
- **[heading]** Alarm linkage
- **[heading]** Add Template Trigger
- **[heading]** Template Trigger Information
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Trigger Name
- Organization
- Template Name
- Founder
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **Please input trigger name** [text] — placeholder: Please input trigger name
- **templateName** [text] — placeholder: Please input template name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing no records

---

## MODULE: Template Triggers > Add Form

**URL:** `https://www.cfsmartems.com/AlarmLinkage/TemplateTriggers`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0022_super_admin_template_triggers___add_form.png`

### ELEMENTS
- **[button]** Add
- **[button]** Query
- **[button]** Close
- **[button]** Save
- **[heading]** Alarm linkage
Template Trigger
Template Trigger List
- **[heading]** Alarm linkage
- **[heading]** Add Template Trigger
- **[heading]** Template Trigger Information
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Trigger Name
- Organization
- Template Name
- Founder
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **Please input trigger name** [text] — placeholder: Please input trigger name
- **templateName** [text] — placeholder: Please input template name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **Name** [text]
- **DeviceTemplateId** [select] — Options: CFBAG, CF SMART TECHNOLOGIES MONITORING SYSTEM, IMRAN's HOUSE, Fico Furnace, EMS PANEL, PV GENSET SYNC, CF Smart Main Panel, Gulshan-e-Zia, CF Smart Technologies Generator, Dummy
- **DeviceSlaveId** [select] — Options: CF BAG, CF BAG CONTROL
- **TemplateVariableId** [select] — Options: Voltage (40067), Current (40089), Power (40101), Reactive Power (40109), Apparent Power (40117), Power Factor (40125), Frequency (40129), Import Energy (40139), Units Consumption (40141)
- **TriggerCondition** [select] — Options: OFF, ON, Value is less than A, Value is more than B, Value is more than A and less than B, Value is more than B or less than A, Value is equal to A
- **AValue** [number]
- **BValue** [number]
- **AlarmDeadZone** [text] — placeholder: Please enter trigger threshold
- **Alarm** [checkbox]
- **Linkage** [checkbox]
- **LinkageType** [select] — Options: Acquisition, Control
- **LinkageSlaveId** [select]
- **LinkageVariableId** [select]
- **DistributionData** [text]

### PAGINATION
- Showing no records

### NOTES
- Opened via button: Add

---

## MODULE: Alarm Settings

**URL:** `https://www.cfsmartems.com/AlarmLinkage/AlarmSettings`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0023_super_admin_alarm_settings.png`

### ELEMENTS
- **[button]** Add
- **[button]** Batch Delete
- **[button]** Query
- **[button]** Close
- **[button]** Save
- **[heading]** Alarm linkage
Alarm Settings
Alarm Settings List
- **[heading]** Alarm linkage
- **[heading]** Add Alarm Configuration
- **[heading]** Alarm Configuration Information
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Alarm Configuration Name
- Organization
- Push Type
- Push Body
- Push Method
- Pushing Mechanism
- Status
- Founder
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **** [select] — Options: Template Trigger
- **Please input alarm configuration name** [text] — placeholder: Please input alarm configuration name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **** [checkbox]

### PAGINATION
- Showing no records

---

## MODULE: Alarm Settings > Add Form

**URL:** `https://www.cfsmartems.com/AlarmLinkage/AlarmSettings`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0024_super_admin_alarm_settings___add_form.png`

### ELEMENTS
- **[button]** Add
- **[button]** Batch Delete
- **[button]** Query
- **[button]** Close
- **[button]** Save
- **[button]** ×
- **[heading]** Alarm linkage
Alarm Settings
Alarm Settings List
- **[heading]** Alarm linkage
- **[heading]** Add Alarm Configuration
- **[heading]** Alarm Configuration Information
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Alarm Configuration Name
- Organization
- Push Type
- Push Body
- Push Method
- Pushing Mechanism
- Status
- Founder
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **** [select] — Options: Template Trigger
- **Please input alarm configuration name** [text] — placeholder: Please input alarm configuration name
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **** [checkbox]
- **Name** [text]
- **OrganizationId** [select] — Options: CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli, Delicia Warehouse
- **TemplateTriggerId** [select]
- **ConfigDevices** [select] — Options: CF SMART TECHNOLOGIES
- **Please choose devices** [search] — placeholder: Please choose devices
- **PushingMechanism** [radio]
- **PushingMechanism** [radio]
- **AlarmSilenceMinute** [number]
- **PushMethod** [select] — Options: SMS, Email
- **** [search]
- **ConfigContacts** [select] — Options: Huzaifa
- **Please choose contacts** [search] — placeholder: Please choose contacts
- **PushRuleDescription** [text]

### PAGINATION
- Showing no records

### NOTES
- Opened via button: Add

---

## MODULE: Alarm Contacts

**URL:** `https://www.cfsmartems.com/AlarmLinkage/Contacts`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0025_super_admin_alarm_contacts.png`

### ELEMENTS
- **[button]** Add
- **[button]** Batch Delete
- **[button]** Query
- **[heading]** Alarm linkage
Alarm contacts
Contacts List
- **[heading]** Alarm linkage
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- Contact Name
- Orgaization
- Mobile Phone
- Email
- Whatsapp
- Remark
- Add People
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, CF Smart Technology, FICO, C Power, NUST, Guest Org, Supra Steel, Japan Electronics, Bakery, Red Chilli
- **Contact name, phone number or email** [text] — placeholder: Contact name, phone number or email
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **** [checkbox]
- **** [checkbox]

### PAGINATION
- Showing 1 to 1 of 1 records

---

## MODULE: Alarm Contacts > Add Form

**URL:** `https://www.cfsmartems.com/AlarmLinkage/AddEditContact`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0026_super_admin_alarm_contacts___add_form.png`

### NOTES
- Opened via button: Add

---

## MODULE: Device Timestamps

**URL:** `https://www.cfsmartems.com/DeviceTimestamps/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0027_super_admin_device_timestamps.png`

### ELEMENTS
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Device Timestamps
Device Timestamps
Manage Device Timestamps
- **[heading]** Device Timestamps
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Online
- **[badge/status]** Offline

### TABLE COLUMNS
- Device Name
- Last Date Activity
- Last Active
- Status

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, 100

### PAGINATION
- Showing 1 to 10 of 13 records

---

## MODULE: Manage Schedule Task

**URL:** `https://www.cfsmartems.com/ScheduleTask/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0028_super_admin_manage_schedule_task.png`

### ELEMENTS
- **[button]** Add Scheduled Task
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Tasks
Manage Scheduled Tasks
List
- **[heading]** Manage Tasks
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** OFF
- **[badge/status]** Active
- **[badge/status]** ON

### TABLE COLUMNS
- Serial No.
- Device Variable
- Action
- Scheduled Time
- Repeat Type
- Status
- Created by
- Operation

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 3 of 3 records

---

## MODULE: Manage Schedule Task > Add Scheduled Task Form

**URL:** `https://www.cfsmartems.com/ScheduleTask/AddEdit`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0029_super_admin_manage_schedule_task___add_scheduled_task_form.png`

### NOTES
- Opened via button: Add Scheduled Task

---

## MODULE: Manage Theme Settings

**URL:** `https://www.cfsmartems.com/ThemeSettings/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0030_super_admin_manage_theme_settings.png`

### ELEMENTS
- **[button]** Add Theme
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Theme Settings
Manage Theme Settings
List
- **[heading]** Manage Theme Settings
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Serial No.
- Theme Name
- Header Colors
- Body Colors
- Font Size
- Status
- Created By
- Created Date
- Operation

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 8 of 8 records

---

## MODULE: Manage Theme Settings > Add Theme Form

**URL:** `https://www.cfsmartems.com/ThemeSettings/AddEdit`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0031_super_admin_manage_theme_settings___add_theme_form.png`

### NOTES
- Opened via button: Add Theme

---

## MODULE: Manage Settings

**URL:** `https://www.cfsmartems.com/ManageSettings/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0032_super_admin_manage_settings.png`

### ELEMENTS
- **[button]** Query
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Settings
Manage Settings
List
- **[heading]** Manage Settings
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Logo

### TABLE COLUMNS
- Key
- Type
- Value Preview
- Description
- Last Updated
- Action

### FORMS / INPUT FIELDS
- **** [select] — Options: All Types, Logo, Text, Image, Configuration
- **Search by key...** [text] — placeholder: Search by key...
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 1 of 1 records

---

## MODULE: Manage List

**URL:** `https://www.cfsmartems.com/Setting/List`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0033_super_admin_manage_list.png`

### ELEMENTS
- **[button]** Add Item
- **[button]** Query
- **[button]** Close
- **[button]** Submit
- **[heading]** Manage Lists
Manage Lists
List
- **[heading]** Manage Lists
- **[heading]** List Item
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- List Type
- Name
- Description
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, Product Catalog, Protocols and Drivers
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 10 of 17 records

---

## MODULE: Manage List > Add Item Form

**URL:** `https://www.cfsmartems.com/Setting/List`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0034_super_admin_manage_list___add_item_form.png`

### ELEMENTS
- **[button]** Add Item
- **[button]** Query
- **[button]** Close
- **[button]** Submit
- **[heading]** Manage Lists
Manage Lists
List
- **[heading]** Manage Lists
- **[heading]** Add List Item
- **[badge/status]** 0
- **[badge/status]** Admin

### TABLE COLUMNS
- List Type
- Name
- Description
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All, Product Catalog, Protocols and Drivers
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]
- **Name** [text]
- **ListType** [select] — Options: Select Type, Product Catalog, Protocols and Drivers
- **Description** [text]

### PAGINATION
- Showing 1 to 10 of 17 records

### NOTES
- Opened via button: Add Item

---

# DASHBOARD: Super Admin -> Organization

---

## MODULE: Organization List

**URL:** `https://www.cfsmartems.com/Organization/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0045_super_admin____organization_organization_list.png`

### ELEMENTS
- **[button]** Add Organization
- **[button]** Close
- **[button]** Submit
- **[card/widget]** Organizations
Users
Manage Gateway
Manage Devices
Manage Icons
Manage Products
Manage Data
Alarm Linkage
Device Timestamps
Manage Schedule Task
Manage Theme Settings
Manage Settings
Others
- **[heading]** Manage Organizations
Manage Organizations
List
- **[heading]** Manage Organizations
- **[heading]** Organization
- **[badge/status]** 0
- **[badge/status]** Admin
- **[badge/status]** Active

### TABLE COLUMNS
- Organization Name
- Organization Description
- Creation Time
- Status
- Operation

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 10 of 10 records

### NOTES
- Direct impersonation of Organization Admins is restricted by backend role security policy (cannot impersonate another Admin).

---

# DASHBOARD: User

---

## MODULE: Customer Dashboard Home

**URL:** `https://www.cfsmartems.com/Dashboard/Dashboard`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0048_user_customer_dashboard_home.png`

### Sidebar Navigation Items
- **maryamishtiaq185@gmail.com** -> `#`
- **Back to Admin** -> `/Account/BackToAdmin`
- **My
                                        Profile** -> `/Account/Profile`
- **Change Password** -> `/Account/ChangePassword`
- **Sign Out** -> `/Account/Logout`
- **Dashboard** -> `/Dashboard/Dashboard`
- **Dashboard** -> `/Dashboard/Dashboard`
- **Detail** -> `/Dashboard/Index`
- **Subscription** -> `/home/subscription`
- **Products** -> `/home/productcatalog`
- **Schedule** -> `/schedule/index`
- **Manage Slab Rates** -> `/SlabRates/index`
- **Manage Interval History** -> `/IntervalHistory/index`
- **Alarm Template** -> `/AlarmTemplates/index`
- **Notification** -> `/Notification/index`
- **AI Analytics** -> `/DeviceForecastReadings/index`
- **AI Analytics** -> `/DeviceForecastReadings/index`
- **Voltage Imbalance** -> `/Dashboard/Voltage`
- **Current Imbalance** -> `/Dashboard/Current`
- **Power Factor** -> `/Dashboard/PowerFactor`
- **Energy Consumption** -> `/Dashboard/EnergyConsumption`
- **Anomalies** -> `/Dashboard/Anomalies`

### ELEMENTS
- **[button]** 32
- **[button]** Download Data
- **[card/widget]** Manage Dashboard
Dashboard
Detail
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[heading]** Dashboard
- **[heading]** Total Power Consumption
1h
24h
7d
30d
14.89kWh
- **[heading]** Total Export Power
1h
24h
7d
30d
0.00kWh
- **[heading]** Voltage Imbalance (%)
1h
24h
7d
30d
27.20
- **[heading]** Current Imbalance
1h
24h
7d
30d
53.43
- **[heading]** Real Time Power Factor (Avg & Trend)
1h
24h
7d
30d
0.90
- **[heading]** Predicted Consumption
1h
24h
7d
30d
16.38
- **[heading]** Anomalies Detected (Count & Type)
1h
24h
7d
30d
42
Total Anomalies Detected
39
Overvoltage (Voltage)
2
Low Power Factor (Power Factor)
1 / 2
- **[heading]** THD-V
1h
24h
7d
30d
0.00%
- **[heading]** THD-I
1h
24h
7d
30d
0.00%
- **[heading]** Frequency
1h
24h
7d
30d
0.00Hz
- **[heading]** No Additional Metrics
- **[badge/status]** Customer

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **** [select] — Options: Main Wapda

---

## MODULE: My
                                        Profile

**URL:** `https://www.cfsmartems.com/Account/Profile`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0049_user_my_________________________________________profile.png`

### ELEMENTS
- **[button]** 33
- **[button]** Update
- **[card/widget]** Manage Dashboard
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[card/widget]** Full Name
Email
Phone Number
- **[heading]** Edit Profile
- **[badge/status]** Customer

### FORMS / INPUT FIELDS
- **FullName** [text]
- **Email** [text]
- **PhoneNumber** [text]

---

## MODULE: Change Password

**URL:** `https://www.cfsmartems.com/Account/ChangePassword`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0050_user_change_password.png`

### ELEMENTS
- **[button]** 33
- **[button]** Submit
- **[card/widget]** Manage Dashboard
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[heading]** Change Password
- **[badge/status]** 34
- **[badge/status]** Customer

### FORMS / INPUT FIELDS
- **CurrentPassword** [password] — placeholder: Current Password
- **NewPassword** [password] — placeholder: New Password
- **ConfirmPassword** [password] — placeholder: Repeat Password

---

## MODULE: Detail

**URL:** `https://www.cfsmartems.com/Dashboard/Index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0051_user_detail.png`

### ELEMENTS
- **[button]** 34
- **[button]** Download All
- **[button]** Download Data
- **[button]** Day
- **[button]** Month
- **[button]** Year
- **[button]** Total
- **[button]** Close
- **[button]** Save
- **[card/widget]** Manage Dashboard
Dashboard
Detail
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[heading]** Dashboard
- **[heading]** VoltageA
240.1 V
- **[heading]** VoltageB
239 V
- **[heading]** VoltageC
236.8 V
- **[heading]** Phase VoltageA
413 V
- **[heading]** Phase VoltageB
413 V
- **[heading]** Phase VoltageC
413.9 V
- **[heading]** CurrentA
16.09 A
- **[heading]** CurrentB
27.23 A
- **[heading]** CurrentC
46.2 A
- **[heading]** Active Power
18.97 kW
- **[heading]** Reactive Power
9.07 kVar
- **[heading]** Apparent Power
21.32 kVA
- **[heading]** Power Consumption
16032.2 kWh
- **[heading]** Export Power
0.84 kWh
- **[heading]** Power Factor
0.88
- **[heading]** Frequency
49.54 Hz
- **[heading]** THDUa
1.6 %
- **[heading]** THDUb
1.6 %
- **[heading]** THDUc
1.5 %
- **[heading]** THDIa
4.8 %
- **[heading]** THDIb
8.1 %
- **[heading]** THDIc
17.6 %
- **[heading]** Total cost pertif
0.00 PKR
- **[heading]** Set Interval
- **[badge/status]** Customer

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **** [select] — Options: Main Wapda
- **name** [text] — placeholder: Select date
- **name** [text] — placeholder: Select Start Date
- **name** [text] — placeholder: Select End Date
- **** [select] — Options: January, February, March, April, May, June, July, August, September, October
- **** [number]
- **** [select] — Options: January, February, March, April, May, June, July, August, September, October
- **** [number]
- **** [select] — Options: January, February, March, April, May, June, July, August, September, October
- **** [number]

---

## MODULE: Subscription

**URL:** `https://www.cfsmartems.com/home/subscription`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0052_user_subscription.png`

### ELEMENTS
- **[button]** Submit
- **[heading]** Subscription

### FORMS / INPUT FIELDS
- **Name** [text] — placeholder: Name
- **Email** [text] — placeholder: Email
- **PhoneNumber** [text] — placeholder: Phone
- **Description** [text] — placeholder: Description / Requirement

---

## MODULE: Products

**URL:** `https://www.cfsmartems.com/home/productcatalog`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0053_user_products.png`

### ELEMENTS
- **[heading]** Product Catalog

---

## MODULE: Schedule

**URL:** `https://www.cfsmartems.com/schedule/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0054_user_schedule.png`

### ELEMENTS
- **[button]** 34
- **[button]** Add Scheduled Task
- **[card/widget]** Manage Dashboard
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[card/widget]** Device 
All locations
Delicia Warehouse
All locations
Show 
10
25
50
All
Search:
Slave	Variable	Action	Scheduled Time	Repeat Type	Status	Operation
No data available in table
Showing no records
- **[heading]** Manage Schedule
Manage Scheduled
List
- **[heading]** Manage Schedule
- **[badge/status]** Customer

### TABLE COLUMNS
- Slave
- Variable
- Action
- Scheduled Time
- Repeat Type
- Status
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All locations, Delicia Warehouse
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing no records

---

## MODULE: Manage Slab Rates

**URL:** `https://www.cfsmartems.com/SlabRates/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0055_user_manage_slab_rates.png`

### ELEMENTS
- **[button]** 34
- **[button]** Add Slab Rate
- **[card/widget]** Manage Dashboard
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[card/widget]** Device 
All locations
Delicia Warehouse
All locations
Show 
10
25
50
All
Search:
Slave	Unit From	Unit To	Rate	On-Peak Rate	Off-Peak Rate	Operation
No data available in table
Showing no records
- **[heading]** Manage Slab Rates
Manage Slab Rates
List
- **[heading]** Manage Slab Rates
- **[badge/status]** Customer

### TABLE COLUMNS
- Slave
- Unit From
- Unit To
- Rate
- On-Peak Rate
- Off-Peak Rate
- Operation

### FORMS / INPUT FIELDS
- **** [select] — Options: All locations, Delicia Warehouse
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing no records

---

## MODULE: Manage Interval History

**URL:** `https://www.cfsmartems.com/IntervalHistory/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0056_user_manage_interval_history.png`

### ELEMENTS
- **[button]** 34
- **[button]** Add Interval
- **[card/widget]** Manage Dashboard
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[card/widget]** Device 
All locations
Delicia Warehouse
All locations
Show 
10
25
50
All
Search:
Variable Name	Slave Name	Total Unit	Tariff	Start Date	End Date	Actions
No data available in table
Showing no records
- **[heading]** Manage Interval History
Manage Interval History
List
- **[heading]** Manage Interval History
- **[badge/status]** Customer

### TABLE COLUMNS
- Variable Name
- Slave Name
- Total Unit
- Tariff
- Start Date
- End Date
- Actions

### FORMS / INPUT FIELDS
- **** [select] — Options: All locations, Delicia Warehouse
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing no records

---

## MODULE: Alarm Template

**URL:** `https://www.cfsmartems.com/AlarmTemplates/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0057_user_alarm_template.png`

### ELEMENTS
- **[button]** 34
- **[button]** Add Alarm Templates
- **[card/widget]** Manage Dashboard
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[card/widget]** Show 
10
25
50
All
Search:
Trigger Name	Organization	Template Name	Founder	Update Time	Operation
sdf	Delicia Warehouse	DELICIA WAREHOUSE	Miss Maryam	2026-06-09 07:13:12	
Showing 1 to 1 of 1 records
1
- **[heading]** Manage Alarm Templates
Manage Alarm Templates
List
- **[heading]** Manage Alarm Templates
- **[badge/status]** Customer

### TABLE COLUMNS
- Trigger Name
- Organization
- Template Name
- Founder
- Update Time
- Operation

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 1 of 1 records

---

## MODULE: Notification

**URL:** `https://www.cfsmartems.com/Notification/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0058_user_notification.png`

### ELEMENTS
- **[button]** Delete All
- **[card/widget]** Manage Dashboard
Subscription
Products
Schedule
Manage Slab Rates
Manage Interval History
Alarm Template
Notification
Manage AI Analytics
- **[heading]** Alarm Notifications
Manage Alarm Notifications
List
- **[heading]** Alarm Notifications
- **[badge/status]** 0
- **[badge/status]** Customer

### TABLE COLUMNS
- Trigger Name
- Device Name
- Description
- Time
- Operation

### FORMS / INPUT FIELDS
- **DataTables_Table_0_length** [select] — Options: 10, 25, 50, All
- **** [search]

### PAGINATION
- Showing 1 to 10 of 91 entries

---

## MODULE: AI Analytics

**URL:** `https://www.cfsmartems.com/DeviceForecastReadings/index`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0059_user_ai_analytics.png`

### ELEMENTS
- **[button]** Next 10 Minutes
- **[button]** Next 5 Hours
- **[button]** Next 7 Days
- **[button]** Custom
- **[button]** Cancel
- **[button]** Apply
- **[heading]** AI Analytics
AI Analytics
AI Analytics Readings
- **[heading]** AI Analytics
- **[badge/status]** 0
- **[badge/status]** Customer

### TABLE COLUMNS
- Variable Name
- Display Value
- Received Time

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **Pick date range** [text] — placeholder: Pick date range
- **** [select] — Options: Please Select, Main Wapda
- **** [select] — Options: VoltageA (40097), VoltageB (40099), VoltageC (40101), Phase VoltageA (40103), Phase VoltageB (40105), Phase VoltageC (40107), CurrentA (40109), CurrentB (40111), CurrentC (40113), Active Power (40121)
- **** [search]

### FILTERS
- Delicia Warehouse
- Please Select, Main Wapda
- VoltageA (40097), VoltageB (40099), VoltageC (40101), Phase VoltageA (40103), Phase VoltageB (40105), Phase VoltageC (40107), CurrentA (40109), CurrentB (40111), CurrentC (40113), Active Power (40121)

---

## MODULE: Voltage Imbalance

**URL:** `https://www.cfsmartems.com/Dashboard/Voltage`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0060_user_voltage_imbalance.png`

### ELEMENTS
- **[button]** ← Back
- **[heading]** Voltage Imbalance Details
Dashboard
Voltage
- **[heading]** Voltage Imbalance Details
- **[heading]** Loading Data...
- **[badge/status]** 0
- **[badge/status]** Customer

### TABLE COLUMNS
- Time
- Type

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **** [select] — Options: Main Wapda

### PAGINATION
- Previous

---

## MODULE: Current Imbalance

**URL:** `https://www.cfsmartems.com/Dashboard/Current`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0061_user_current_imbalance.png`

### ELEMENTS
- **[button]** ← Back
- **[heading]** Current Imbalance Details
Dashboard
Current
- **[heading]** Current Imbalance Details
- **[heading]** Loading Data...
- **[badge/status]** 0
- **[badge/status]** Customer

### TABLE COLUMNS
- Time
- Type

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **** [select] — Options: Main Wapda

### PAGINATION
- Previous

---

## MODULE: Power Factor

**URL:** `https://www.cfsmartems.com/Dashboard/PowerFactor`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0062_user_power_factor.png`

### ELEMENTS
- **[button]** ← Back
- **[heading]** Power Factor Details
Dashboard
Power Factor
- **[heading]** Power Factor Details
- **[heading]** Loading Data...
- **[badge/status]** 0
- **[badge/status]** Customer

### TABLE COLUMNS
- Time
- Type

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **** [select] — Options: Main Wapda

### PAGINATION
- Previous

---

## MODULE: Energy Consumption

**URL:** `https://www.cfsmartems.com/Dashboard/EnergyConsumption`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0063_user_energy_consumption.png`

### ELEMENTS
- **[button]** ← Back
- **[heading]** Total Power Consumption
Dashboard
Energy Consumption
- **[heading]** Total Power Consumption
- **[heading]** Loading Data...
- **[badge/status]** 0
- **[badge/status]** Customer

### TABLE COLUMNS
- Time
- Type
- Consumption

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **** [select] — Options: Main Wapda
- **** [select] — Options: Power Consumption (kWh), Export Power (kWh)

---

## MODULE: Anomalies

**URL:** `https://www.cfsmartems.com/Dashboard/Anomalies`

**Page Title:** EMS

**Screenshot:** `C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\0064_user_anomalies.png`

### ELEMENTS
- **[button]** ← Back
- **[heading]** Anomalies Details
Dashboard
Anomalies
- **[heading]** Anomalies Details
- **[heading]** Loading Data...
- **[badge/status]** 0
- **[badge/status]** Customer

### FORMS / INPUT FIELDS
- **** [select] — Options: Delicia Warehouse
- **** [select] — Options: Main Wapda

---