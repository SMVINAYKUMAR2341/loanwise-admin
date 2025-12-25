// Loan Application Types
export type LoanStatus = 'pending' | 'approved' | 'rejected' | 'disbursed' | 'active' | 'closed';
export type MLRecommendation = 'approve' | 'reject' | 'review';
export type DisbursementMode = 'internal_transfer' | 'neft' | 'imps' | 'rtgs';
export type EMIStatus = 'upcoming' | 'paid' | 'overdue' | 'partial';

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  panNumber: string; // masked
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  employmentType: 'salaried' | 'self_employed' | 'business';
  employerName: string;
  monthlyIncome: number;
  existingLoans: number;
  creditScore: number;
  createdAt: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'pan_card' | 'aadhaar' | 'salary_slip' | 'bank_statement' | 'itr' | 'address_proof' | 'photo';
  url: string;
  uploadedAt: string;
  verified: boolean;
}

export interface MLAnalysis {
  riskScore: number; // 0-100
  recommendation: MLRecommendation;
  confidence: number; // 0-100
  factors: {
    name: string;
    impact: 'positive' | 'negative' | 'neutral';
    weight: number;
    description: string;
  }[];
}

export interface LoanApplication {
  id: string;
  customerId: string;
  customer: Customer;
  amount: number;
  tenure: number; // months
  interestRate: number;
  purpose: string;
  emiAmount: number;
  status: LoanStatus;
  mlAnalysis: MLAnalysis;
  documents: Document[];
  appliedAt: string;
  decidedAt?: string;
  decisionNote?: string;
  decisionBy?: string;
  disbursedAt?: string;
  disbursementRef?: string;
}

export interface Disbursement {
  id: string;
  loanId: string;
  loan: LoanApplication;
  amount: number;
  mode: DisbursementMode;
  accountNumber: string; // masked
  ifscCode: string;
  bankName: string;
  transactionRef: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  initiatedAt: string;
  completedAt?: string;
  initiatedBy: string;
}

export interface EMISchedule {
  id: string;
  loanId: string;
  emiNumber: number;
  dueDate: string;
  amount: number;
  principal: number;
  interest: number;
  status: EMIStatus;
  paidDate?: string;
  paidAmount?: number;
  outstandingAfter: number;
}

export interface Payment {
  id: string;
  loanId: string;
  emiId: string;
  amount: number;
  principal: number;
  interest: number;
  paymentDate: string;
  paymentMode: string;
  transactionRef: string;
}

export interface LoanLedger {
  loanId: string;
  loan: LoanApplication;
  totalPrincipal: number;
  totalInterest: number;
  totalPayable: number;
  amountPaid: number;
  outstandingPrincipal: number;
  outstandingInterest: number;
  remainingBalance: number;
  emisPaid: number;
  emisRemaining: number;
  nextDueDate?: string;
  nextEmiAmount?: number;
  schedule: EMISchedule[];
  payments: Payment[];
}

export interface AuditLog {
  id: string;
  timestamp: string;
  adminUser: string;
  actionType: 'login' | 'approval' | 'rejection' | 'disbursement' | 'view' | 'export' | 'settings_change';
  target: string;
  targetId?: string;
  details: string;
  ipAddress: string;
}

export interface DashboardMetrics {
  totalApplications: number;
  pendingApprovals: number;
  approvedLoans: number;
  rejectedLoans: number;
  totalDisbursed: number;
  activeLoans: number;
  overdueEMIs: number;
  todaysCollections: number;
  approvalRate: number;
  averageLoanAmount: number;
}
