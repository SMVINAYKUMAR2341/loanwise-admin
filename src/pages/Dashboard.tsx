import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { mockDashboardMetrics, mockLoanApplications } from '@/data/mockData';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  Wallet, 
  Activity, 
  AlertTriangle,
  TrendingUp,
  IndianRupee
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const metrics = mockDashboardMetrics;

const pieData = [
  { name: 'Approved', value: metrics.approvedLoans, color: 'hsl(142, 70%, 45%)' },
  { name: 'Pending', value: metrics.pendingApprovals, color: 'hsl(38, 92%, 50%)' },
  { name: 'Rejected', value: metrics.rejectedLoans, color: 'hsl(0, 65%, 50%)' },
];

const trendData = [
  { month: 'Jul', applications: 45, disbursed: 32 },
  { month: 'Aug', applications: 52, disbursed: 38 },
  { month: 'Sep', applications: 48, disbursed: 35 },
  { month: 'Oct', applications: 61, disbursed: 45 },
  { month: 'Nov', applications: 55, disbursed: 42 },
  { month: 'Dec', applications: 67, disbursed: 48 },
];

const formatCurrency = (value: number) => 
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

export default function Dashboard() {
  const pendingApps = mockLoanApplications.filter(l => l.status === 'pending').slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Monitor loan applications, disbursements, and repayments</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Applications"
            value={metrics.totalApplications}
            icon={FileText}
            trend="+12%"
            trendUp
          />
          <MetricCard
            title="Pending Review"
            value={metrics.pendingApprovals}
            icon={Clock}
            iconColor="text-warning"
          />
          <MetricCard
            title="Total Disbursed"
            value={formatCurrency(metrics.totalDisbursed)}
            icon={Wallet}
            iconColor="text-primary"
          />
          <MetricCard
            title="Overdue EMIs"
            value={metrics.overdueEMIs}
            icon={AlertTriangle}
            iconColor="text-destructive"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Approval Rate Chart */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Approval Distribution</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trend Chart */}
          <div className="glass-card rounded-xl p-6 lg:col-span-2">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Application Trend (Last 6 Months)</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="hsl(150, 10%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(150, 10%, 55%)" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(160, 25%, 10%)', 
                      border: '1px solid hsl(160, 20%, 18%)',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="applications" 
                    stroke="hsl(160, 60%, 45%)" 
                    fillOpacity={1} 
                    fill="url(#colorApps)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Recent Pending Applications</h3>
            <a href="/applications/pending" className="text-sm text-primary hover:underline">View all</a>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Amount</th>
                  <th>Purpose</th>
                  <th>Risk Score</th>
                  <th>ML Recommendation</th>
                  <th>Applied</th>
                </tr>
              </thead>
              <tbody>
                {pendingApps.map((app) => (
                  <tr key={app.id} className="cursor-pointer">
                    <td className="font-medium">{app.customer.name}</td>
                    <td>{formatCurrency(app.amount)}</td>
                    <td className="text-muted-foreground">{app.purpose}</td>
                    <td>
                      <span className={`font-semibold ${
                        app.mlAnalysis.riskScore < 30 ? 'risk-low' : 
                        app.mlAnalysis.riskScore < 60 ? 'risk-medium' : 'risk-high'
                      }`}>
                        {app.mlAnalysis.riskScore}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${
                        app.mlAnalysis.recommendation === 'approve' ? 'status-approved' :
                        app.mlAnalysis.recommendation === 'reject' ? 'status-rejected' : 'status-pending'
                      }`}>
                        {app.mlAnalysis.recommendation.charAt(0).toUpperCase() + app.mlAnalysis.recommendation.slice(1)}
                      </span>
                    </td>
                    <td className="text-muted-foreground text-sm">
                      {new Date(app.appliedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  iconColor?: string;
}

function MetricCard({ title, value, icon: Icon, trend, trendUp, iconColor = 'text-primary' }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-xs ${trendUp ? 'text-success' : 'text-destructive'}`}>
              <TrendingUp className="h-3 w-3" />
              <span>{trend} from last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-primary/10 ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
