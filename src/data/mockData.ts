import { 
  Customer, 
  LoanApplication, 
  Disbursement, 
  EMISchedule, 
  Payment, 
  LoanLedger, 
  AuditLog,
  DashboardMetrics,
  MLAnalysis,
  EMIStatus
} from '@/types/loan';

// Helper to generate dates
const daysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

const daysFromNow = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

// Mock Customers
export const mockCustomers: Customer[] = [
  {
    id: 'cust-001',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98XXX XXXXX',
    panNumber: 'ABCDE****F',
    dateOfBirth: '1985-06-15',
    address: '123, Green Park Colony',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    employmentType: 'salaried',
    employerName: 'TCS Limited',
    monthlyIncome: 125000,
    existingLoans: 1,
    creditScore: 780,
    createdAt: daysAgo(120),
  },
  {
    id: 'cust-002',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 87XXX XXXXX',
    panNumber: 'FGHIJ****K',
    dateOfBirth: '1990-03-22',
    address: '456, Sector 18',
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201301',
    employmentType: 'salaried',
    employerName: 'Infosys',
    monthlyIncome: 95000,
    existingLoans: 0,
    creditScore: 720,
    createdAt: daysAgo(90),
  },
  {
    id: 'cust-003',
    name: 'Amit Patel',
    email: 'amit.patel@email.com',
    phone: '+91 99XXX XXXXX',
    panNumber: 'LMNOP****Q',
    dateOfBirth: '1982-11-08',
    address: '789, CG Road',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380009',
    employmentType: 'business',
    employerName: 'Patel Enterprises',
    monthlyIncome: 200000,
    existingLoans: 2,
    creditScore: 695,
    createdAt: daysAgo(200),
  },
  {
    id: 'cust-004',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@email.com',
    phone: '+91 90XXX XXXXX',
    panNumber: 'RSTUV****W',
    dateOfBirth: '1993-07-30',
    address: '321, Banjara Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034',
    employmentType: 'salaried',
    employerName: 'Microsoft India',
    monthlyIncome: 180000,
    existingLoans: 0,
    creditScore: 810,
    createdAt: daysAgo(60),
  },
  {
    id: 'cust-005',
    name: 'Mohammed Khan',
    email: 'mohammed.khan@email.com',
    phone: '+91 91XXX XXXXX',
    panNumber: 'XYZAB****C',
    dateOfBirth: '1988-01-12',
    address: '555, MG Road',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    employmentType: 'self_employed',
    employerName: 'Khan Consulting',
    monthlyIncome: 150000,
    existingLoans: 1,
    creditScore: 650,
    createdAt: daysAgo(150),
  },
  {
    id: 'cust-006',
    name: 'Anita Desai',
    email: 'anita.desai@email.com',
    phone: '+91 92XXX XXXXX',
    panNumber: 'DEFGH****I',
    dateOfBirth: '1987-09-05',
    address: '777, Linking Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    employmentType: 'salaried',
    employerName: 'HDFC Bank',
    monthlyIncome: 110000,
    existingLoans: 0,
    creditScore: 755,
    createdAt: daysAgo(45),
  },
  {
    id: 'cust-007',
    name: 'Vikram Singh',
    email: 'vikram.singh@email.com',
    phone: '+91 93XXX XXXXX',
    panNumber: 'JKLMN****O',
    dateOfBirth: '1980-04-18',
    address: '999, Civil Lines',
    city: 'Delhi',
    state: 'Delhi',
    pincode: '110001',
    employmentType: 'business',
    employerName: 'Singh Motors',
    monthlyIncome: 350000,
    existingLoans: 3,
    creditScore: 620,
    createdAt: daysAgo(300),
  },
  {
    id: 'cust-008',
    name: 'Lakshmi Iyer',
    email: 'lakshmi.iyer@email.com',
    phone: '+91 94XXX XXXXX',
    panNumber: 'PQRST****U',
    dateOfBirth: '1995-12-25',
    address: '111, Anna Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600040',
    employmentType: 'salaried',
    employerName: 'Zoho Corp',
    monthlyIncome: 85000,
    existingLoans: 0,
    creditScore: 740,
    createdAt: daysAgo(30),
  },
  {
    id: 'cust-009',
    name: 'Rahul Mehta',
    email: 'rahul.mehta@email.com',
    phone: '+91 95XXX XXXXX',
    panNumber: 'VWXYZ****A',
    dateOfBirth: '1991-08-14',
    address: '222, FC Road',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411004',
    employmentType: 'salaried',
    employerName: 'Wipro',
    monthlyIncome: 75000,
    existingLoans: 1,
    creditScore: 680,
    createdAt: daysAgo(75),
  },
  {
    id: 'cust-010',
    name: 'Kavita Joshi',
    email: 'kavita.joshi@email.com',
    phone: '+91 96XXX XXXXX',
    panNumber: 'BCDEF****G',
    dateOfBirth: '1989-02-28',
    address: '333, Vastrapur',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380015',
    employmentType: 'salaried',
    employerName: 'Adani Group',
    monthlyIncome: 140000,
    existingLoans: 0,
    creditScore: 790,
    createdAt: daysAgo(20),
  },
];

// Generate ML Analysis
const generateMLAnalysis = (creditScore: number, income: number, existingLoans: number): MLAnalysis => {
  let riskScore = 100 - (creditScore / 10);
  if (existingLoans > 1) riskScore += 10;
  if (income < 80000) riskScore += 15;
  riskScore = Math.min(100, Math.max(0, riskScore));

  let recommendation: 'approve' | 'reject' | 'review' = 'review';
  if (riskScore < 30) recommendation = 'approve';
  else if (riskScore > 60) recommendation = 'reject';

  return {
    riskScore: Math.round(riskScore),
    recommendation,
    confidence: Math.round(75 + Math.random() * 20),
    factors: [
      {
        name: 'Credit Score',
        impact: creditScore >= 700 ? 'positive' : creditScore >= 600 ? 'neutral' : 'negative',
        weight: 35,
        description: `Credit score of ${creditScore} is ${creditScore >= 700 ? 'excellent' : creditScore >= 600 ? 'fair' : 'below average'}`,
      },
      {
        name: 'Income Stability',
        impact: income >= 100000 ? 'positive' : income >= 70000 ? 'neutral' : 'negative',
        weight: 25,
        description: `Monthly income of ₹${income.toLocaleString()} indicates ${income >= 100000 ? 'strong' : 'moderate'} repayment capacity`,
      },
      {
        name: 'Existing Debt',
        impact: existingLoans === 0 ? 'positive' : existingLoans <= 1 ? 'neutral' : 'negative',
        weight: 20,
        description: `${existingLoans} existing loan(s) affecting debt-to-income ratio`,
      },
      {
        name: 'Employment Type',
        impact: 'positive',
        weight: 15,
        description: 'Stable employment history verified',
      },
      {
        name: 'Document Verification',
        impact: 'positive',
        weight: 5,
        description: 'All submitted documents verified successfully',
      },
    ],
  };
};

// Mock Loan Applications
export const mockLoanApplications: LoanApplication[] = [
  // Pending Applications
  {
    id: 'loan-001',
    customerId: 'cust-001',
    customer: mockCustomers[0],
    amount: 500000,
    tenure: 36,
    interestRate: 12.5,
    purpose: 'Home Renovation',
    emiAmount: 16733,
    status: 'pending',
    mlAnalysis: generateMLAnalysis(780, 125000, 1),
    documents: [
      { id: 'doc-001', name: 'PAN Card', type: 'pan_card', url: '#', uploadedAt: daysAgo(5), verified: true },
      { id: 'doc-002', name: 'Aadhaar Card', type: 'aadhaar', url: '#', uploadedAt: daysAgo(5), verified: true },
      { id: 'doc-003', name: 'Salary Slip - Oct', type: 'salary_slip', url: '#', uploadedAt: daysAgo(5), verified: true },
      { id: 'doc-004', name: 'Bank Statement', type: 'bank_statement', url: '#', uploadedAt: daysAgo(5), verified: true },
    ],
    appliedAt: daysAgo(5),
  },
  {
    id: 'loan-002',
    customerId: 'cust-002',
    customer: mockCustomers[1],
    amount: 300000,
    tenure: 24,
    interestRate: 11.5,
    purpose: 'Education Expenses',
    emiAmount: 14088,
    status: 'pending',
    mlAnalysis: generateMLAnalysis(720, 95000, 0),
    documents: [
      { id: 'doc-005', name: 'PAN Card', type: 'pan_card', url: '#', uploadedAt: daysAgo(3), verified: true },
      { id: 'doc-006', name: 'Aadhaar Card', type: 'aadhaar', url: '#', uploadedAt: daysAgo(3), verified: true },
      { id: 'doc-007', name: 'Salary Slip', type: 'salary_slip', url: '#', uploadedAt: daysAgo(3), verified: true },
    ],
    appliedAt: daysAgo(3),
  },
  {
    id: 'loan-003',
    customerId: 'cust-005',
    customer: mockCustomers[4],
    amount: 1000000,
    tenure: 60,
    interestRate: 13.0,
    purpose: 'Business Expansion',
    emiAmount: 22753,
    status: 'pending',
    mlAnalysis: generateMLAnalysis(650, 150000, 1),
    documents: [
      { id: 'doc-008', name: 'PAN Card', type: 'pan_card', url: '#', uploadedAt: daysAgo(2), verified: true },
      { id: 'doc-009', name: 'ITR Documents', type: 'itr', url: '#', uploadedAt: daysAgo(2), verified: false },
    ],
    appliedAt: daysAgo(2),
  },
  {
    id: 'loan-004',
    customerId: 'cust-006',
    customer: mockCustomers[5],
    amount: 400000,
    tenure: 48,
    interestRate: 11.0,
    purpose: 'Vehicle Purchase',
    emiAmount: 10363,
    status: 'pending',
    mlAnalysis: generateMLAnalysis(755, 110000, 0),
    documents: [
      { id: 'doc-010', name: 'PAN Card', type: 'pan_card', url: '#', uploadedAt: daysAgo(1), verified: true },
      { id: 'doc-011', name: 'Salary Slips', type: 'salary_slip', url: '#', uploadedAt: daysAgo(1), verified: true },
    ],
    appliedAt: daysAgo(1),
  },
  {
    id: 'loan-005',
    customerId: 'cust-008',
    customer: mockCustomers[7],
    amount: 200000,
    tenure: 12,
    interestRate: 10.5,
    purpose: 'Medical Emergency',
    emiAmount: 17616,
    status: 'pending',
    mlAnalysis: generateMLAnalysis(740, 85000, 0),
    documents: [
      { id: 'doc-012', name: 'PAN Card', type: 'pan_card', url: '#', uploadedAt: daysAgo(1), verified: true },
    ],
    appliedAt: daysAgo(1),
  },
  // Approved (Pending Disbursement)
  {
    id: 'loan-006',
    customerId: 'cust-004',
    customer: mockCustomers[3],
    amount: 800000,
    tenure: 48,
    interestRate: 11.5,
    purpose: 'Home Renovation',
    emiAmount: 20930,
    status: 'approved',
    mlAnalysis: generateMLAnalysis(810, 180000, 0),
    documents: [
      { id: 'doc-013', name: 'All Documents', type: 'pan_card', url: '#', uploadedAt: daysAgo(10), verified: true },
    ],
    appliedAt: daysAgo(15),
    decidedAt: daysAgo(10),
    decisionNote: 'Excellent credit profile. All documents verified. Approved as per policy.',
    decisionBy: 'Admin',
  },
  {
    id: 'loan-007',
    customerId: 'cust-010',
    customer: mockCustomers[9],
    amount: 600000,
    tenure: 36,
    interestRate: 11.0,
    purpose: 'Wedding Expenses',
    emiAmount: 19645,
    status: 'approved',
    mlAnalysis: generateMLAnalysis(790, 140000, 0),
    documents: [
      { id: 'doc-014', name: 'All Documents', type: 'pan_card', url: '#', uploadedAt: daysAgo(8), verified: true },
    ],
    appliedAt: daysAgo(12),
    decidedAt: daysAgo(8),
    decisionNote: 'Strong income and credit score. Approved.',
    decisionBy: 'Admin',
  },
  // Disbursed & Active
  {
    id: 'loan-008',
    customerId: 'cust-003',
    customer: mockCustomers[2],
    amount: 1500000,
    tenure: 60,
    interestRate: 13.5,
    purpose: 'Business Working Capital',
    emiAmount: 34654,
    status: 'active',
    mlAnalysis: generateMLAnalysis(695, 200000, 2),
    documents: [
      { id: 'doc-015', name: 'All Documents', type: 'pan_card', url: '#', uploadedAt: daysAgo(100), verified: true },
    ],
    appliedAt: daysAgo(120),
    decidedAt: daysAgo(110),
    decisionNote: 'Approved with higher interest rate due to existing loans.',
    decisionBy: 'Admin',
    disbursedAt: daysAgo(100),
    disbursementRef: 'TXN-2024-001234',
  },
  {
    id: 'loan-009',
    customerId: 'cust-001',
    customer: mockCustomers[0],
    amount: 250000,
    tenure: 24,
    interestRate: 11.0,
    purpose: 'Personal Loan',
    emiAmount: 11650,
    status: 'active',
    mlAnalysis: generateMLAnalysis(780, 125000, 0),
    documents: [
      { id: 'doc-016', name: 'All Documents', type: 'pan_card', url: '#', uploadedAt: daysAgo(200), verified: true },
    ],
    appliedAt: daysAgo(210),
    decidedAt: daysAgo(205),
    decisionNote: 'Repeat customer with good track record.',
    decisionBy: 'Admin',
    disbursedAt: daysAgo(200),
    disbursementRef: 'TXN-2024-000856',
  },
  // Rejected
  {
    id: 'loan-010',
    customerId: 'cust-007',
    customer: mockCustomers[6],
    amount: 2000000,
    tenure: 60,
    interestRate: 14.0,
    purpose: 'Business Expansion',
    emiAmount: 46559,
    status: 'rejected',
    mlAnalysis: generateMLAnalysis(620, 350000, 3),
    documents: [
      { id: 'doc-017', name: 'All Documents', type: 'pan_card', url: '#', uploadedAt: daysAgo(30), verified: true },
    ],
    appliedAt: daysAgo(35),
    decidedAt: daysAgo(30),
    decisionNote: 'High existing debt burden. Credit score below threshold for requested amount.',
    decisionBy: 'Admin',
  },
  {
    id: 'loan-011',
    customerId: 'cust-009',
    customer: mockCustomers[8],
    amount: 500000,
    tenure: 48,
    interestRate: 12.5,
    purpose: 'Debt Consolidation',
    emiAmount: 13318,
    status: 'rejected',
    mlAnalysis: generateMLAnalysis(680, 75000, 1),
    documents: [
      { id: 'doc-018', name: 'All Documents', type: 'pan_card', url: '#', uploadedAt: daysAgo(25), verified: true },
    ],
    appliedAt: daysAgo(28),
    decidedAt: daysAgo(25),
    decisionNote: 'EMI to income ratio exceeds 50% threshold.',
    decisionBy: 'Admin',
  },
];

// Mock Disbursements
export const mockDisbursements: Disbursement[] = [
  {
    id: 'disb-001',
    loanId: 'loan-008',
    loan: mockLoanApplications.find(l => l.id === 'loan-008')!,
    amount: 1500000,
    mode: 'neft',
    accountNumber: 'XXXX XXXX 5678',
    ifscCode: 'ICIC0001234',
    bankName: 'ICICI Bank',
    transactionRef: 'TXN-2024-001234',
    status: 'completed',
    initiatedAt: daysAgo(100),
    completedAt: daysAgo(100),
    initiatedBy: 'Admin',
  },
  {
    id: 'disb-002',
    loanId: 'loan-009',
    loan: mockLoanApplications.find(l => l.id === 'loan-009')!,
    amount: 250000,
    mode: 'imps',
    accountNumber: 'XXXX XXXX 1234',
    ifscCode: 'HDFC0005678',
    bankName: 'HDFC Bank',
    transactionRef: 'TXN-2024-000856',
    status: 'completed',
    initiatedAt: daysAgo(200),
    completedAt: daysAgo(200),
    initiatedBy: 'Admin',
  },
];

// Generate EMI Schedule for a loan
const generateEMISchedule = (loanId: string, amount: number, tenure: number, rate: number, disbursedDaysAgo: number): EMISchedule[] => {
  const monthlyRate = rate / 12 / 100;
  const emi = Math.round((amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1));
  
  const schedule: EMISchedule[] = [];
  let outstanding = amount;
  
  for (let i = 1; i <= tenure; i++) {
    const interest = Math.round(outstanding * monthlyRate);
    const principal = emi - interest;
    outstanding -= principal;
    
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() - disbursedDaysAgo);
    dueDate.setMonth(dueDate.getMonth() + i);
    
    const monthsPassed = Math.floor(disbursedDaysAgo / 30);
    let status: EMIStatus = 'upcoming';
    let paidDate: string | undefined;
    let paidAmount: number | undefined;
    
    if (i <= monthsPassed) {
      if (i === monthsPassed && Math.random() > 0.8) {
        status = 'overdue';
      } else {
        status = 'paid';
        const payDate = new Date();
        payDate.setDate(payDate.getDate() - disbursedDaysAgo);
        payDate.setMonth(payDate.getMonth() + i);
        paidDate = payDate.toISOString();
        paidAmount = emi;
      }
    } else if (i === monthsPassed + 1 && dueDate < new Date()) {
      status = 'overdue';
    }
    
    schedule.push({
      id: `emi-${loanId}-${i}`,
      loanId,
      emiNumber: i,
      dueDate: dueDate.toISOString(),
      amount: emi,
      principal,
      interest,
      status,
      paidDate,
      paidAmount,
      outstandingAfter: Math.max(0, outstanding),
    });
  }
  
  return schedule;
};

// Mock EMI Schedules
export const mockEMISchedules: Record<string, EMISchedule[]> = {
  'loan-008': generateEMISchedule('loan-008', 1500000, 60, 13.5, 100),
  'loan-009': generateEMISchedule('loan-009', 250000, 24, 11.0, 200),
};

// Generate Loan Ledger
export const generateLoanLedger = (loan: LoanApplication): LoanLedger => {
  const schedule = mockEMISchedules[loan.id] || [];
  const paidEMIs = schedule.filter(e => e.status === 'paid');
  const totalPaid = paidEMIs.reduce((sum, e) => sum + (e.paidAmount || 0), 0);
  const totalPrincipalPaid = paidEMIs.reduce((sum, e) => sum + e.principal, 0);
  const totalInterestPaid = paidEMIs.reduce((sum, e) => sum + e.interest, 0);
  
  const totalPayable = loan.emiAmount * loan.tenure;
  const totalInterest = totalPayable - loan.amount;
  
  const nextEMI = schedule.find(e => e.status === 'upcoming' || e.status === 'overdue');
  
  return {
    loanId: loan.id,
    loan,
    totalPrincipal: loan.amount,
    totalInterest,
    totalPayable,
    amountPaid: totalPaid,
    outstandingPrincipal: loan.amount - totalPrincipalPaid,
    outstandingInterest: totalInterest - totalInterestPaid,
    remainingBalance: totalPayable - totalPaid,
    emisPaid: paidEMIs.length,
    emisRemaining: loan.tenure - paidEMIs.length,
    nextDueDate: nextEMI?.dueDate,
    nextEmiAmount: nextEMI?.amount,
    schedule,
    payments: paidEMIs.map((emi, idx) => ({
      id: `pay-${loan.id}-${idx}`,
      loanId: loan.id,
      emiId: emi.id,
      amount: emi.paidAmount || emi.amount,
      principal: emi.principal,
      interest: emi.interest,
      paymentDate: emi.paidDate || '',
      paymentMode: 'Auto-debit',
      transactionRef: `PAY-${loan.id.toUpperCase()}-${String(idx + 1).padStart(3, '0')}`,
    })),
  };
};

// Mock Audit Logs
export const mockAuditLogs: AuditLog[] = [
  {
    id: 'audit-001',
    timestamp: daysAgo(0) + '',
    adminUser: 'Admin',
    actionType: 'login',
    target: 'System',
    details: 'Admin logged in successfully',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'audit-002',
    timestamp: daysAgo(1) + '',
    adminUser: 'Admin',
    actionType: 'view',
    target: 'Loan Application',
    targetId: 'loan-001',
    details: 'Viewed loan application for Rajesh Kumar',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'audit-003',
    timestamp: daysAgo(8) + '',
    adminUser: 'Admin',
    actionType: 'approval',
    target: 'Loan Application',
    targetId: 'loan-007',
    details: 'Approved loan application for Kavita Joshi - ₹6,00,000',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'audit-004',
    timestamp: daysAgo(10) + '',
    adminUser: 'Admin',
    actionType: 'approval',
    target: 'Loan Application',
    targetId: 'loan-006',
    details: 'Approved loan application for Sneha Reddy - ₹8,00,000',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'audit-005',
    timestamp: daysAgo(25) + '',
    adminUser: 'Admin',
    actionType: 'rejection',
    target: 'Loan Application',
    targetId: 'loan-011',
    details: 'Rejected loan application for Rahul Mehta - EMI to income ratio exceeds threshold',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'audit-006',
    timestamp: daysAgo(30) + '',
    adminUser: 'Admin',
    actionType: 'rejection',
    target: 'Loan Application',
    targetId: 'loan-010',
    details: 'Rejected loan application for Vikram Singh - High existing debt burden',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'audit-007',
    timestamp: daysAgo(100) + '',
    adminUser: 'Admin',
    actionType: 'disbursement',
    target: 'Loan',
    targetId: 'loan-008',
    details: 'Disbursed ₹15,00,000 to Amit Patel via NEFT - Ref: TXN-2024-001234',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'audit-008',
    timestamp: daysAgo(200) + '',
    adminUser: 'Admin',
    actionType: 'disbursement',
    target: 'Loan',
    targetId: 'loan-009',
    details: 'Disbursed ₹2,50,000 to Rajesh Kumar via IMPS - Ref: TXN-2024-000856',
    ipAddress: '192.168.1.100',
  },
];

// Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalApplications: mockLoanApplications.length,
  pendingApprovals: mockLoanApplications.filter(l => l.status === 'pending').length,
  approvedLoans: mockLoanApplications.filter(l => l.status === 'approved' || l.status === 'active' || l.status === 'disbursed').length,
  rejectedLoans: mockLoanApplications.filter(l => l.status === 'rejected').length,
  totalDisbursed: mockDisbursements.reduce((sum, d) => sum + d.amount, 0),
  activeLoans: mockLoanApplications.filter(l => l.status === 'active').length,
  overdueEMIs: Object.values(mockEMISchedules).flat().filter(e => e.status === 'overdue').length,
  todaysCollections: 68500,
  approvalRate: 64,
  averageLoanAmount: Math.round(mockLoanApplications.reduce((sum, l) => sum + l.amount, 0) / mockLoanApplications.length),
};
