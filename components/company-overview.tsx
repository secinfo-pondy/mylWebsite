"use client"
import React, { useEffect, useState } from 'react';

interface Peer {
  company_name: string;
  ticker: string;
  cik_code: string;
  logo_url: string;
}

interface boardmemberdetails {
  ExecOrDirName: string;
  Diretor_type: string;
  Director_since: number;
  Age: number;
  biography: string;
  imageurl: string;
}

interface BoardMemberModalProps {
  member: boardmemberdetails;
  isOpen: boolean;
  onClose: () => void;
}

const BoardMemberModal: React.FC<BoardMemberModalProps> = ({ member, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b">
          <div className="flex items-center space-x-4">
            <img
              src={member.imageurl}
              alt={member.ExecOrDirName}
              className="w-20 h-20 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/placeholder-logo.png';
              }}
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{member.ExecOrDirName}</h2>
              <p className="text-lg text-blue-600 font-medium">{member.Diretor_type}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Key Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Gender</h3>
              <p className="text-lg text-gray-900">Male</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Age</h3>
              <p className="text-lg text-gray-900">{member.Age}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Director Since</h3>
              <p className="text-lg text-gray-900">{member.Director_since}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Class</h3>
              <p className="text-lg text-gray-900">Annually</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">File Link</h3>
              <a href="#" className="text-lg text-blue-600 hover:underline">Link</a>
            </div>
          </div>

          {/* Biography Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Biography</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {member.biography || "Biography information not available."}
              </p>
            </div>
          </div>

          
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CompanyOverview() {
  const [twitter, setTwitter] = useState<string | null>(null);
  const [company_name, setCompany_name] = useState<String | null>(null);
  const [peers, setPeers] = useState<Peer[]>([]);
  const [boardMembers, setBoardMembers] = useState<boardmemberdetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<boardmemberdetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: boardmemberdetails) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    // Use your internal API route instead of external URL
    fetch('/api/company-data')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log('Fetched data:', data); // Debug log
        setPeers(data.firstDegreePeeroverView || []);
        setBoardMembers(data.boardmemberdetails || []);
        setCompany_name(data.company_name || null);
        setTwitter(data.twitter_link || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err); // Debug log
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center flex-auto py-10 px-2 pt-20">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Tear sheet - {company_name}</h1>
      <div id="parent" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <div id="col1">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
            {loading ? (
              <div className="text-lg text-gray-500">Loading...</div>
            ) : error ? (
              <div className="text-red-500">
                {error}
                <br />
                <small className="text-gray-500">Check the browser console for more details</small>
              </div>
            ) : peers.length === 0 ? (
              <div className="text-gray-500">No peer data available</div>
            ) : (
              <div className="overflow-x-auto">
                <p className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Peer companies</p>
                <div className="grid grid-cols-2 gap-4 p-4">
                  {peers.map((peer) => (
                    <div key={peer.cik_code} className="border border-gray-200 rounded p-4 hover:bg-gray-50">
                      <img
                        src={peer.logo_url}
                        alt={peer.company_name}
                        className="w-20 object-contain mx-auto"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder-logo.png';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="font-bold" id="col2">
          Board Members({boardMembers.length})
          <div className="grid bg-gray-50">
            {boardMembers.map((boardMember) => (
              <div key={boardMember.ExecOrDirName} 
                className="border border-gray-200 rounded p-4 hover:bg-gray-50">
                <img
                  src={boardMember.imageurl}
                  alt={boardMember.ExecOrDirName}
                  className="w-20 object-contain rounded-full mx-auto"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                  }}
                />
                <div className="text-center">
                  <h3 
                    className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-600 hover:underline"
                    onClick={() => handleMemberClick(boardMember)}
                  >
                    {boardMember.ExecOrDirName}
                  </h3>
                  <p className="text-sm text-gray-600">{boardMember.Diretor_type}</p>
                  <p className="text-xs text-gray-500">Since: {boardMember.Director_since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="col3">Chart column1</div>
        <div id="col4">Chart Column 2</div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <BoardMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}