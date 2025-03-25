import React from 'react';
import { User, Mail, Phone, MapPin, Building } from 'lucide-react';

const WardProfile: React.FC = () => {
  const wardOfficial = {
    name: 'Rajesh Kumar',
    designation: 'Ward Parshad',
    wardNumber: '7',
    email: 'rajesh.kumar@wardoffice.gov.in',
    phone: '+91 98765 43210',
    address: 'Ward Office, Sector 7, New Delhi',
    experience: '8 years',
    qualification: 'Master in Public Administration',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center">
          <span className="text-3xl text-white font-bold">
            {wardOfficial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{wardOfficial.name}</h2>
          <p className="text-blue-900 font-semibold">{wardOfficial.designation}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <Building className="text-blue-900" />
          <div>
            <p className="text-sm text-gray-600">Ward Number</p>
            <p className="font-semibold">{wardOfficial.wardNumber}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-900" />
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-semibold">{wardOfficial.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-blue-900" />
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-semibold">{wardOfficial.phone}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="text-blue-900" />
          <div>
            <p className="text-sm text-gray-600">Office Address</p>
            <p className="font-semibold">{wardOfficial.address}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Experience</p>
            <p className="font-semibold">{wardOfficial.experience}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Qualification</p>
            <p className="font-semibold">{wardOfficial.qualification}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardProfile;