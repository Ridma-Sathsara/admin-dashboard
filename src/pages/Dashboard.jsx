import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { DollarSign, Box, ArrowUpRight, UserPlus } from 'lucide-react'; // Correct Lucide imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the stats array
const stats = [
  {
    label: 'Total Sales',
    value: '$10,500',
    trend: '+15%',
    icon: DollarSign, // Lucide icon
    color: 'bg-blue-500',
    details: 'Compared to last month',
  },
  {
    label: 'Total Products',
    value: '750',
    trend: '-3%',
    icon: Box, // Lucide icon
    color: 'bg-green-500',
    details: 'Compared to last month',
  },
  {
    label: 'Total Orders',
    value: '1,250',
    trend: '+5%',
    icon: ArrowUpRight, // Lucide icon
    color: 'bg-red-500',
    details: 'Compared to last month',
  },
  {
    label: 'New Customers',
    value: '120',
    trend: '+10%',
    icon: UserPlus, // Lucide icon
    color: 'bg-yellow-500',
    details: 'Compared to last month',
  },
];

// Sales and product data (your data remains the same)
const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Gem Sales',
      data: [65, 59, 80, 81, 56, 89],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Jewelry Sales',
      data: [45, 70, 65, 85, 75, 95],
      borderColor: 'rgb(236, 72, 153)',
      backgroundColor: 'rgba(236, 72, 153, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

// Top Products Data
const topProductsData = {
  labels: ['Diamond Ring', 'Ruby Necklace', 'Sapphire', 'Gold Bracelet', 'Emerald Earrings'],
  datasets: [
    {
      label: 'Sales',
      data: [42, 35, 30, 28, 25],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(147, 51, 234, 0.8)',
        'rgba(234, 179, 8, 0.8)',
        'rgba(16, 185, 129, 0.8)',
      ],
    },
  ],
};

// Options for charts
const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Dashboard content (stats, charts, items) */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="stat-content">
                <div>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                  {stat.details && (
                    <p className="stat-details">{stat.details}</p>
                  )}
                  <p className={`stat-trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                    {stat.trend} from last month
                  </p>
                </div>
                <div className={`stat-icon ${stat.color}`}>
                  <Icon className="icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h2 className="chart-title">Sales Overview</h2>
          <div className="chart-container">
            <Line data={salesData} options={lineOptions} />
          </div>
        </div>

        <div className="chart-card">
          <h2 className="chart-title">Top Selling Products</h2>
          <div className="chart-container">
            <Bar data={topProductsData} options={barOptions} />
          </div>
        </div>
      </div>

      <div className="items-grid">
        <div className="items-card">
          <div className="items-header">
            <h2 className="items-title">Latest Gem Arrivals</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="items-list">
            {/* Latest Gem List */}
          </div>
        </div>

        <div className="items-card">
          <div className="items-header">
            <h2 className="items-title">Latest Jewelry Arrivals</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="items-list">
            {/* Latest Jewelry List */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
