'use client';
import React from 'react';
import Header from '@/Components/Header';
import Sidebar from '@/Components/Sidebar';

import UrgentAlert from '@/Components/UrgentAlert';
import SubjectsGrid from '@/Components/SubjectsGrid';
import UpcomingTasks from '@/Components/UpcomingTasks';
import ProgressOverview from '@/Components/ProgressOverview';

export default function StudentDashboard() {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <Header />

                {/* Dashboard Grid */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Stats Section */}
                        <div className="lg:col-span-3">
                            <UrgentAlert  />
                        </div>

                        {/* Courses Section */}
                        <div className="lg:col-span-2">
                            <SubjectsGrid />
                        </div>

                        {/* Schedule Section */}
                        <div>
                            <UpcomingTasks />
                        </div>

                        {/* Recent Activity */}
                        <div className="lg:col-span-3">
                            <ProgressOverview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}