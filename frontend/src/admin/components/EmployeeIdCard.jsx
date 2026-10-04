import React, { useState } from "react";
import {
  Mail,
  Phone,
  CalendarDays,
  Building2,
  Briefcase,
  Globe,
  X,
  Printer,
} from "lucide-react";

const EmployeeIdCard = ({ member }) => {
  const [isClose, setIsClose] = useState(true);
  // PRINT FUNCTION
  const handlePrint = () => {
    window.print();
  };

  if (!isClose) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/40
        backdrop-blur-[2px]
        p-4
      "
    >

      {/* ================= ID CARD ================= */}
      <div
        className="
          print-card
          relative
          w-[350px]
          h-[590px]
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-[0_25px_70px_rgba(60,0,90,0.3)]
        "
      >

        {/* ================= BUTTONS ================= */}
        <div className="no-print absolute right-3 top-3 z-[100] flex gap-2">

          {/* PRINT */}
          <button
            onClick={handlePrint}
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              bg-white/95
              text-purple-700
              shadow-md
              hover:bg-purple-100
            "
            title="Print"
          >
            <Printer size={15} />
          </button>

          {/* CLOSE */}
          <button
            onClick={() => setIsClose(false)}
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              bg-white/95
              text-red-500
              shadow-md
              hover:bg-red-100
            "
            title="Close"
          >
            <X size={16} />
          </button>

        </div>


        {/* ================= HEADER ================= */}
        <div className="relative h-[285px] overflow-hidden bg-white">

          {/* Decorative circles */}
          <div
            className="
              absolute -right-12 -top-14
              h-52 w-52
              rounded-full
              border-2 border-purple-200
            "
          />

          <div
            className="
              absolute -right-2 -top-5
              h-40 w-40
              rounded-full
              border border-fuchsia-200
            "
          />

          <div
            className="
              absolute right-8 top-8
              h-24 w-24
              rounded-full
              bg-gradient-to-br
              from-purple-100
              to-fuchsia-50
            "
          />

          {/* Small decoration */}
          <div
            className="
              absolute left-7 top-[130px]
              h-6 w-6
              rounded-full
              border-2 border-purple-600
            "
          />

          <div
            className="
              absolute left-[34px] top-[137px]
              h-2 w-2
              rounded-full
              bg-fuchsia-500
            "
          />


          {/* ================= COMPANY LOGO ================= */}
          <div
            className="
              absolute left-1/2 top-5
              z-20
              -translate-x-1/2
              flex items-center gap-2
              rounded-2xl
              border border-purple-100
              bg-white
              px-4 py-2
              shadow-md
            "
          >
            <img
              src="/logo.png"
              alt="Digital In App"
              className="h-11 w-11 rounded-full object-cover"
            />

            <div>
              <h2 className="text-[16px] font-black text-purple-800">
                DIGITAL IN APP
              </h2>

              <p className="text-[7px] tracking-[3px] text-purple-400">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>


          {/* ================= PROFILE IMAGE ================= */}
          <div
            className="
              absolute
              left-1/2 top-[105px]
              z-30
              -translate-x-1/2
              rounded-full
              bg-gradient-to-br
              from-purple-700
              via-fuchsia-600
              to-purple-800
              p-1
              shadow-xl
            "
          >

            <div className="rounded-full bg-white p-1">

              {member.image ? (
                <img
                  src={member.image}
                  alt={name}
                  className="
                    h-32 w-32
                    rounded-full
                    object-cover
                  "
                />
              ) : (
                <div
                  className="
                    flex h-32 w-32
                    items-center justify-center
                    rounded-full
                    bg-purple-100
                    text-5xl
                    font-bold
                    text-purple-700
                  "
                >
                  {member?.name?.charAt(0).toUpperCase()}
                </div>
              )}

            </div>

            {/* Active */}
            <span
              className="
                absolute bottom-1 right-2
                h-7 w-7
                rounded-full
                border-[3px] border-white
                bg-green-500
              "
            />

          </div>


          {/* White curve */}
          <div
            className="
              absolute
              -bottom-8 -left-20
              h-20 w-[520px]
              rounded-[50%]
              bg-white
            "
          />

        </div>


        {/* ================= PURPLE BODY ================= */}
        <div
          className="
            absolute
            -left-20 top-[255px]
            h-[330px] w-[500px]
            rotate-[-5deg]
            bg-gradient-to-br
            from-purple-800
            via-fuchsia-700
            to-purple-800
          "
        />


        {/* ================= TOP WAVE ================= */}
        <div
          className="
            absolute
            -left-20 top-[250px]
            h-12 w-[520px]
            rotate-[-5deg]
            rounded-[50%]
            bg-gradient-to-r
            from-purple-900
            to-fuchsia-600
          "
        />


        {/* ================= EMPLOYEE CONTENT ================= */}
        <div
          className="
            absolute
            left-0 right-0
            top-[315px]
            z-40
            px-7
            text-center
            text-white
          "
        >

          {/* Name */}
          <h1 className="text-2xl font-light">
            {member?.name?.split(" ")[0] || "Employee"}{" "}
            <span className="font-extrabold">
              {member?.name?.split(" ").slice(1).join(" ")}
            </span>
          </h1>


          {/* Role */}
          <p className="mt-1 text-xs text-white/80">
            {member.role}
          </p>


          {/* Employee ID */}
          <span
            className="
              mt-2 inline-block
              rounded-full
              border border-white/20
              bg-white/10
              px-4 py-1
              text-[9px]
              font-bold
              tracking-wider
            "
          >
            {member.EmpId}
          </span>


          {/* Details */}
          <div className="mx-auto mt-4 w-[280px] space-y-2 text-left">

            <InfoRow
              icon={<Briefcase size={12} />}
              label="Post"
              value={member.role}
            />

            <InfoRow
              icon={<Building2 size={12} />}
              label="Department"
              value={member.department}
            />

            {member.phone && (
              <InfoRow
                icon={<Phone size={12} />}
                label="Phone"
                value={member.phone}
              />
            )}

            <InfoRow
              icon={<Mail size={12} />}
              label="Email"
              value={member.email}
            />

            <InfoRow
              icon={<CalendarDays size={12} />}
              label="Joined"
              value={new Date(member.joinedDate).toLocaleDateString("en-IN")}
            />

          </div>

        </div>


        {/* ================= BOTTOM DECORATION ================= */}
        <div
          className="
            absolute
            bottom-[55px] right-[-60px]
            z-20
            h-24 w-48
            rounded-full
            border-[8px]
            border-white/20
          "
        />

        <div
          className="
            absolute
            bottom-[38px] right-[-45px]
            z-20
            h-20 w-40
            rounded-full
            border-2 border-white/30
          "
        />


        {/* ================= FOOTER ================= */}
        <div
          className="
            absolute
            bottom-0 left-0 right-0
            z-50
            h-[68px]
            bg-gradient-to-r
            from-[#300080]
            via-[#7200c9]
            to-[#e000e8]
            text-white
            flex flex-col
            items-center
            justify-center
          "
        >

          <p className="text-[8px] text-white/70">
            Official Employee ID Card
          </p>

          <p className="mt-1 text-sm font-bold tracking-wide">
            DIGITAL IN APP™
          </p>

          <div className="mt-1 flex items-center gap-1 text-[8px] text-white/70">
            <Globe size={8} />
            <span>www.digitalinapp.in</span>
          </div>

        </div>

      </div>
    </div>
  );
};


/* ================= INFO ROW ================= */

const InfoRow = ({ icon, label, value }) => {
  return (
    <div className="flex items-center text-[9px]">

      <span className="flex w-5 justify-center">
        {icon}
      </span>

      <span className="w-[75px] text-white/70">
        {label}
      </span>

      <span className="mr-2 text-white/60">
        :
      </span>

      <span className="truncate font-semibold">
        {value}
      </span>

    </div>
  );
};


export default EmployeeIdCard;